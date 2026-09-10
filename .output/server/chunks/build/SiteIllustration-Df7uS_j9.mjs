import { computed, ref, useAttrs, useTemplateRef, mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import { A as defu, n as hasProtocol, B as withLeadingSlash, q as joinURL, l as parseURL, C as encodeParam, e as encodePath } from '../_/nitro.mjs';
import { u as useHead } from './v3-PufbtLol.mjs';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return ((key) => key !== void 0 ? map[key] || key : map.missingValue);
}
function createOperationsGenerator(config = {}) {
  const formatter = config.formatter;
  const keyMap = config.keyMap && typeof config.keyMap !== "function" ? createMapper(config.keyMap) : config.keyMap;
  const map = {};
  for (const key in config.valueMap) {
    const valueKey = key;
    const value = config.valueMap[valueKey];
    map[valueKey] = typeof value === "object" ? createMapper(value) : value;
  }
  return (modifiers) => {
    var _a;
    const operations = [];
    for (const _key in modifiers) {
      const key = _key;
      if (typeof modifiers[key] === "undefined") {
        continue;
      }
      const value = typeof map[key] === "function" ? map[key](modifiers[key]) : modifiers[key];
      operations.push([keyMap ? keyMap(key) : key, value]);
    }
    if (formatter) {
      return operations.map((entry) => formatter(...entry)).join((_a = config.joinWith) != null ? _a : "&");
    }
    return new URLSearchParams(operations).toString();
  };
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = ((input, modifiers, options) => getImage(input, defu({ modifiers }, options)).url);
  for (const presetName in globalOptions.presets) {
    $img[presetName] = ((source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options }));
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = ((input, options) => getMeta(ctx, input, options));
  $img.getSizes = ((input, options) => getSizes(ctx, input, options));
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { setup, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const provider = setup();
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  const resolvedOptions = {
    ..._options,
    modifiers: {
      ..._options.modifiers,
      width: ((_a = _options.modifiers) == null ? void 0 : _a.width) ? parseSize(_options.modifiers.width) : void 0,
      height: ((_b = _options.modifiers) == null ? void 0 : _b.height) ? parseSize(_options.modifiers.height) : void 0
    }
  };
  const image = provider.getImage(input, resolvedOptions, ctx);
  image.format || (image.format = resolvedOptions.modifiers.format || "");
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const preset = getPreset(ctx, opts.preset);
  const merged = defu(opts, preset);
  const width = parseSize((_a = merged.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = merged.modifiers) == null ? void 0 : _b.height);
  const sizes = merged.sizes ? parseSizes(merged.sizes) : {};
  const _densities = (_c = merged.densities) == null ? void 0 : _c.trim();
  const densities = _densities ? parseDensities(_densities) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth - 1}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
function defineProvider(setup) {
  let result;
  return () => {
    if (result) {
      return result;
    }
    result = typeof setup === "function" ? setup() : setup;
    return result;
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b",
    position: "pos"
  },
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val.toString())
});
const ipxRuntime_36tkXNXzaaBD64wCF4PJD3rO2CeNmQ0LywUeE70itn8G0 = defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage: (src, { modifiers, baseURL }, ctx) => {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`;
      delete modifiers.width;
      delete modifiers.height;
    }
    const params = operationsGenerator(modifiers) || "_";
    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
    }
    return {
      url: joinURL(baseURL, params, encodePath(src))
    };
  }
});
const imageOptions = {
  screens: { "sm": 640, "md": 768, "lg": 1024, "xl": 1280, "2xl": 1536 },
  presets: {},
  domains: [],
  alias: {},
  densities: [1, 2],
  format: ["webp"],
  quality: 75,
  /** @type {"ipx"} */
  provider: "ipx",
  providers: {
    ["ipx"]: { setup: ipxRuntime_36tkXNXzaaBD64wCF4PJD3rO2CeNmQ0LywUeE70itn8G0, defaults: {} }
  }
};
const useImage = (event) => {
  var _a;
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const useImageProps = (props) => {
  const $img = useImage();
  const providerOptions = computed(() => ({
    provider: props.provider,
    preset: props.preset
  }));
  const normalizedAttrs = computed(() => ({
    width: parseSize(props.width),
    height: parseSize(props.height),
    crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
    nonce: props.nonce
  }));
  const imageModifiers = computed(() => {
    return {
      ...props.modifiers,
      width: props.width,
      height: props.height,
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return { providerOptions, normalizedAttrs, imageModifiers };
};
const _sfc_main$6 = {
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: {
    custom: { type: Boolean, required: false },
    placeholder: { type: [Boolean, String, Number, Array], required: false },
    placeholderClass: { type: String, required: false },
    src: { type: String, required: false },
    format: { type: String, required: false },
    quality: { type: [String, Number], required: false },
    background: { type: String, required: false },
    fit: { type: String, required: false },
    modifiers: { type: Object, required: false },
    preset: { type: String, required: false },
    provider: { type: null, required: false },
    sizes: { type: [String, Object], required: false },
    densities: { type: String, required: false },
    preload: { type: [Boolean, Object], required: false },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    crossorigin: { type: [String, Boolean], required: false },
    nonce: { type: String, required: false }
  },
  emits: ["load", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const $img = useImage();
    const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
    const sizes = computed(() => $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: imageModifiers.value
    }));
    const placeholderLoaded = ref(false);
    const attrs = useAttrs();
    const imgAttrs = computed(() => ({
      ...normalizedAttrs.value,
      "data-nuxt-img": "",
      ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs
    }));
    const placeholder = computed(() => {
      if (placeholderLoaded.value) {
        return false;
      }
      const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
      if (!placeholder2) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
      return $img(props.src, {
        ...imageModifiers.value,
        width,
        height,
        quality,
        blur
      }, providerOptions.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
    );
    const src = computed(() => placeholder.value || mainSrc.value);
    if (props.preload) {
      const hasMultipleDensities = sizes.value.srcset.includes("x, ");
      const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          crossorigin: normalizedAttrs.value.crossorigin,
          href: isResponsive ? sizes.value.src : src.value,
          ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
          ...isResponsive && { imagesrcset: sizes.value.srcset },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    useNuxtApp().isHydrating;
    const imgEl = useTemplateRef("imgEl");
    __expose({ imgEl });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value ? __props.placeholderClass : void 0
        }, imgAttrs.value, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          imgAttrs: imgAttrs.value,
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "AppText",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      default: "p"
      // semantic tag: h1, h2, h3, p, span...
    },
    variant: {
      type: String,
      default: "body",
      validator: (v) => ["display", "heading-lg", "heading-md", "body", "body-sm", "muted"].includes(v)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["app-text", `app-text--${__props.variant}`]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/AppText.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AppText = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5326121c"]]);
const _sfc_main$4 = {
  __name: "AppIcon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: (v) => ["search", "menu", "close", "pin", "arrow-right", "calendar", "route", "ticket"].includes(
        v
      )
    },
    size: {
      type: String,
      default: "md",
      // 'sm' | 'md' | 'lg'
      validator: (v) => ["sm", "md", "lg"].includes(v)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: ["app-icon", `app-icon--${__props.size}`],
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true",
        focusable: "false"
      }, _attrs))} data-v-d8388e87>`);
      if (__props.name === "search") {
        _push(`<path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" data-v-d8388e87></path>`);
      } else if (__props.name === "menu") {
        _push(`<path d="M4 7h16M4 12h16M4 17h16" data-v-d8388e87></path>`);
      } else if (__props.name === "close") {
        _push(`<path d="M6 6l12 12M18 6 6 18" data-v-d8388e87></path>`);
      } else if (__props.name === "pin") {
        _push(`<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" data-v-d8388e87></path>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.name === "pin") {
        _push(`<circle cx="12" cy="10" r="2.5" data-v-d8388e87></circle>`);
      } else if (__props.name === "arrow-right") {
        _push(`<path d="M5 12h14M13 6l6 6-6 6" data-v-d8388e87></path>`);
      } else if (__props.name === "calendar") {
        _push(`<!--[--><rect x="3" y="5" width="18" height="16" rx="2" data-v-d8388e87></rect><path d="M3 10h18M8 3v4M16 3v4" data-v-d8388e87></path><!--]-->`);
      } else if (__props.name === "route") {
        _push(`<!--[--><circle cx="5" cy="6" r="2" data-v-d8388e87></circle><circle cx="19" cy="18" r="2" data-v-d8388e87></circle><path d="M5 8v3a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4" stroke-dasharray="3 3" data-v-d8388e87></path><!--]-->`);
      } else if (__props.name === "ticket") {
        _push(`<!--[--><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" data-v-d8388e87></path><path d="M13 7v10" stroke-dasharray="2 2" data-v-d8388e87></path><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/AppIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d8388e87"]]);
const _sfc_main$3 = {
  __name: "NavItem",
  __ssrInlineRender: true,
  props: {
    label: { type: String, required: true },
    href: { type: String, default: "#" },
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: ["nav-item", { "nav-item--active": __props.active }],
        href: __props.href
      }, _attrs))} data-v-a3715660>${ssrInterpolate(__props.label)}</a>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/NavItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a3715660"]]);
const _sfc_main$2 = {
  __name: "HeaderNav",
  __ssrInlineRender: true,
  props: {
    solid: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const route = useRoute();
    const currentPath = computed(() => route.path);
    const menuOpen = ref(false);
    const scrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header-nav", { "header-nav--solid": __props.solid || scrolled.value || menuOpen.value }]
      }, _attrs))} data-v-0db93e4b><div class="header-nav__bar" data-v-0db93e4b><a href="/" class="header-nav__brand" data-v-0db93e4b><span class="header-nav__brand-mark" aria-hidden="true" data-v-0db93e4b>PH</span>`);
      _push(ssrRenderComponent(AppText, {
        as: "span",
        variant: "heading-md",
        class: "header-nav__brand-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pangasinan Heritage `);
          } else {
            return [
              createTextVNode(" Pangasinan Heritage ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><nav class="header-nav__nav header-nav__nav--desktop" aria-label="Primary" data-v-0db93e4b>`);
      _push(ssrRenderComponent(NavItem, {
        label: "Home",
        href: "/",
        active: currentPath.value === "/"
      }, null, _parent));
      _push(ssrRenderComponent(NavItem, {
        label: "Heritage Sites",
        href: "/heritage-sites",
        active: currentPath.value === "/heritage-sites"
      }, null, _parent));
      _push(ssrRenderComponent(NavItem, {
        label: "Culture",
        href: "/culture",
        active: currentPath.value === "/culture"
      }, null, _parent));
      _push(`</nav><button class="header-nav__toggle" type="button"${ssrRenderAttr("aria-expanded", menuOpen.value)} aria-controls="mobile-menu" data-v-0db93e4b>`);
      _push(ssrRenderComponent(AppIcon, {
        name: menuOpen.value ? "close" : "menu",
        size: "lg"
      }, null, _parent));
      _push(`<span class="sr-only" data-v-0db93e4b>${ssrInterpolate(menuOpen.value ? "Close menu" : "Open menu")}</span></button></div><nav id="mobile-menu" class="header-nav__nav header-nav__nav--mobile" aria-label="Primary" style="${ssrRenderStyle(menuOpen.value ? null : { display: "none" })}" data-v-0db93e4b>`);
      _push(ssrRenderComponent(NavItem, {
        label: "Home",
        href: "/",
        active: currentPath.value === "/",
        onClick: ($event) => menuOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(NavItem, {
        label: "Heritage Sites",
        href: "/heritage-sites",
        active: currentPath.value === "/heritage-sites",
        onClick: ($event) => menuOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(NavItem, {
        label: "Culture",
        href: "/culture",
        active: currentPath.value === "/culture",
        onClick: ($event) => menuOpen.value = false
      }, null, _parent));
      _push(`</nav></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/HeaderNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0db93e4b"]]);
const _sfc_main$1 = {
  __name: "AppImage",
  __ssrInlineRender: true,
  props: {
    src: { type: String, default: "" },
    alt: { type: String, required: true },
    ratio: { type: String, default: "4 / 3" },
    priority: { type: Boolean, default: false }
    // true for the above-the-fold hero image
  },
  setup(__props) {
    const failed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "app-image",
        style: { aspectRatio: __props.ratio }
      }, _attrs))} data-v-5b49c426>`);
      if (__props.src && !failed.value) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: __props.src,
          alt: __props.alt,
          loading: __props.priority ? "eager" : "lazy",
          fetchpriority: __props.priority ? "high" : "auto",
          format: "webp",
          quality: "75",
          sizes: "sm:100vw md:50vw lg:400px",
          decoding: "async",
          class: "app-image__el",
          onError: ($event) => failed.value = true
        }, null, _parent));
      } else {
        _push(`<div class="app-image__el app-image__illustration" role="img"${ssrRenderAttr("aria-label", __props.alt)} data-v-5b49c426>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/AppImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b49c426"]]);
const _sfc_main = {
  __name: "SiteIllustration",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: (v) => ["islands", "lighthouse", "hotspring", "festival", "food"].includes(v)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 200 150",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><rect width="200" height="150" fill="var(--color-primary-tint)"></rect>`);
      if (__props.name === "islands") {
        _push(`<!--[--><path d="M0 105 Q50 90 100 105 T200 105 V150 H0 Z" fill="var(--color-primary-light)"></path><path d="M0 120 Q50 108 100 120 T200 120 V150 H0 Z" fill="var(--color-primary)"></path><ellipse cx="60" cy="98" rx="34" ry="18" fill="var(--color-primary-dark)"></ellipse><ellipse cx="130" cy="102" rx="26" ry="14" fill="var(--color-primary-dark)"></ellipse><circle cx="165" cy="30" r="16" fill="var(--color-accent)"></circle><!--]-->`);
      } else if (__props.name === "lighthouse") {
        _push(`<!--[--><circle cx="150" cy="35" r="14" fill="var(--color-accent-tint)"></circle><path d="M0 130 Q100 110 200 130 V150 H0 Z" fill="var(--color-primary)"></path><rect x="82" y="55" width="26" height="70" fill="var(--color-primary-dark)"></rect><path d="M82 55 L95 30 L108 55 Z" fill="var(--color-accent)"></path><rect x="86" y="70" width="18" height="10" fill="var(--color-accent-tint)"></rect><path d="M108 60 L150 45" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round"></path><!--]-->`);
      } else if (__props.name === "hotspring") {
        _push(`<!--[--><path d="M0 150 L40 70 L80 150 Z" fill="var(--color-primary-light)"></path><path d="M60 150 L110 55 L160 150 Z" fill="var(--color-primary)"></path><ellipse cx="100" cy="128" rx="55" ry="20" fill="var(--color-accent-tint)"></ellipse><ellipse cx="100" cy="128" rx="42" ry="14" fill="var(--color-accent)"></ellipse><path d="M85 95 Q80 85 88 78 M100 95 Q95 82 105 73 M115 95 Q110 85 118 78" stroke="var(--color-surface)" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"></path><!--]-->`);
      } else if (__props.name === "festival") {
        _push(`<!--[--><path d="M0 130 Q100 115 200 130 V150 H0 Z" fill="var(--color-primary-light)"></path><path d="M20 130 L20 60" stroke="var(--color-primary-dark)" stroke-width="3"></path><path d="M180 130 L180 60" stroke="var(--color-primary-dark)" stroke-width="3"></path><path d="M20 60 Q60 90 100 60 T180 60" fill="none" stroke="var(--color-primary-dark)" stroke-width="3"></path><circle cx="30" cy="66" r="6" fill="var(--color-accent)"></circle><circle cx="60" cy="80" r="6" fill="var(--color-primary-dark)"></circle><circle cx="90" cy="68" r="6" fill="var(--color-accent-dark)"></circle><circle cx="120" cy="80" r="6" fill="var(--color-primary-dark)"></circle><circle cx="150" cy="66" r="6" fill="var(--color-accent)"></circle><circle cx="170" cy="76" r="6" fill="var(--color-accent-dark)"></circle><!--]-->`);
      } else {
        _push(`<!--[--><ellipse cx="100" cy="100" rx="60" ry="16" fill="var(--color-accent-tint)"></ellipse><ellipse cx="100" cy="95" rx="60" ry="16" fill="var(--color-accent)"></ellipse><ellipse cx="100" cy="90" rx="46" ry="10" fill="var(--color-primary-dark)" opacity="0.15"></ellipse><path d="M55 60 Q100 35 145 60" fill="none" stroke="var(--color-primary-dark)" stroke-width="3" stroke-linecap="round"></path><!--]-->`);
      }
      _push(`</svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/SiteIllustration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { AppText as A, HeaderNav as H, _sfc_main$6 as _, AppIcon as a, AppImage as b, _sfc_main as c };
//# sourceMappingURL=SiteIllustration-Df7uS_j9.mjs.map
