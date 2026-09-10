import { _ as __nuxt_component_0 } from './nuxt-link-BDgLvM3W.mjs';
import { createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, ref, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/index.mjs';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/server-renderer/index.mjs';
import { a as AppIcon, b as AppImage, c as _sfc_main$3, A as AppText } from './SiteIllustration-Df7uS_j9.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = {
  __name: "HeritageCard",
  __ssrInlineRender: true,
  props: {
    site: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "heritage-card" }, _attrs))} data-v-39d923b8>`);
      _push(ssrRenderComponent(AppImage, {
        src: __props.site.photo,
        alt: __props.site.name,
        ratio: "4 / 3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: __props.site.illustration
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                name: __props.site.illustration
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="heritage-card__body" data-v-39d923b8><p class="heritage-card__town" data-v-39d923b8>`);
      _push(ssrRenderComponent(AppIcon, {
        name: "pin",
        size: "sm"
      }, null, _parent));
      _push(` ${ssrInterpolate(__props.site.town)}</p>`);
      _push(ssrRenderComponent(AppText, {
        as: "h3",
        variant: "heading-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.site.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.site.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "body-sm",
        class: "heritage-card__desc"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.site.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.site.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/heritage-sites/${__props.site.id}`,
        class: "heritage-card__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore `);
            _push2(ssrRenderComponent(AppIcon, {
              name: "arrow-right",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore "),
              createVNode(AppIcon, {
                name: "arrow-right",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/HeritageCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeritageCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-39d923b8"]]);
const _sfc_main$1 = {
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary",
      // 'primary' | 'secondary' | 'ghost'
      validator: (v) => ["primary", "secondary", "ghost"].includes(v)
    },
    size: {
      type: String,
      default: "md",
      // 'sm' | 'md'
      validator: (v) => ["sm", "md"].includes(v)
    },
    tag: {
      type: String,
      default: "button"
      // 'button' | 'a'
    },
    type: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps({
        class: ["app-button", [`app-button--${__props.variant}`, `app-button--${__props.size}`]],
        type: __props.tag === "button" ? __props.type : void 0,
        href: __props.tag === "a" ? __props.href : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="app-button__label" data-v-d5d2c513${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "app-button__label" }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/AppButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d5d2c513"]]);
const _sfc_main = {
  __name: "SearchForm",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props, { emit: __emit }) {
    const query = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "search-form",
        role: "search"
      }, _attrs))} data-v-232d7622><label class="search-form__label" for="site-search" data-v-232d7622> Search heritage sites </label><div class="search-form__row" data-v-232d7622><div class="search-form__field" data-v-232d7622>`);
      _push(ssrRenderComponent(AppIcon, {
        name: "search",
        size: "sm",
        class: "search-form__icon"
      }, null, _parent));
      _push(`<input id="site-search"${ssrRenderAttr("value", query.value)} type="search" class="search-form__input" placeholder="Try \u201CHundred Islands\u201D or \u201CBolinao\u201D" autocomplete="off" data-v-232d7622></div>`);
      _push(ssrRenderComponent(AppButton, {
        type: "submit",
        variant: "primary",
        class: "search-form__submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Search`);
          } else {
            return [
              createTextVNode("Search")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/SearchForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-232d7622"]]);

export { AppButton as A, HeritageCard as H, SearchForm as S };
//# sourceMappingURL=SearchForm-CsBJ2CsX.mjs.map
