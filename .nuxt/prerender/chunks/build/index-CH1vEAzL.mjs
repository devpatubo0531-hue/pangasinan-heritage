import { H as HeaderNav, _ as _sfc_main$6, A as AppText, a as AppIcon } from './SiteIllustration-Df7uS_j9.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/server-renderer/index.mjs';
import { h as heritageSites, a as heroPhoto } from './heritageSites-B5Ar7zW6.mjs';
import { A as AppButton, S as SearchForm, H as HeritageCard } from './SearchForm-CsBJ2CsX.mjs';
import { _ as _export_sfc } from './server.mjs';
import { S as SiteFooter } from './SiteFooter-Cc335yd4.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/h3/dist/index.mjs';
import './v3-PufbtLol.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/devalue/index.js';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unhead/dist/plugins.mjs';
import './nuxt-link-BDgLvM3W.mjs';
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unctx/dist/index.mjs';

const _sfc_main$1 = {
  __name: "HeritageGrid",
  __ssrInlineRender: true,
  props: {
    sites: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "sites",
        class: "heritage-grid",
        "aria-labelledby": "heritage-grid-heading"
      }, _attrs))} data-v-ea890b5f><div class="heritage-grid__intro" data-v-ea890b5f>`);
      _push(ssrRenderComponent(AppText, {
        as: "h2",
        id: "heritage-grid-heading",
        variant: "heading-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Featured heritage sites `);
          } else {
            return [
              createTextVNode(" Featured heritage sites ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "muted"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Three places that define Pangasinan&#39;s coastline, history, and natural springs. `);
          } else {
            return [
              createTextVNode(" Three places that define Pangasinan's coastline, history, and natural springs. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="heritage-grid__list" data-v-ea890b5f><!--[-->`);
      ssrRenderList(__props.sites, (site) => {
        _push(ssrRenderComponent(HeritageCard, {
          key: site.id,
          site,
          id: site.id
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="heritage-grid__cta" data-v-ea890b5f><a class="heritage-grid__more" href="/heritage-sites" data-v-ea890b5f> Explore more heritage sites `);
      _push(ssrRenderComponent(AppIcon, {
        name: "arrow-right",
        size: "sm"
      }, null, _parent));
      _push(`</a></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/HeritageGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeritageGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ea890b5f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    function handleSearch(query) {
      searchQuery.value = query;
    }
    const visibleSites = computed(() => {
      if (!searchQuery.value) return heritageSites;
      const q = searchQuery.value.toLowerCase();
      return heritageSites.filter(
        (site) => site.name.toLowerCase().includes(q) || site.town.toLowerCase().includes(q)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "top" }, _attrs))} data-v-a5f1206c><a href="#sites" class="skip-link" data-v-a5f1206c>Skip to heritage sites</a>`);
      _push(ssrRenderComponent(HeaderNav, null, null, _parent));
      _push(`<section class="hero" aria-labelledby="hero-heading" data-v-a5f1206c>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "hero__photo",
        src: unref(heroPhoto).url,
        alt: "Aerial view of limestone islands scattered across a turquoise gulf",
        fetchpriority: "high",
        decoding: "async",
        format: "webp",
        quality: "75",
        sizes: "100vw sm:100vw md:1200px lg:1600px",
        width: "1600",
        height: "900"
      }, null, _parent));
      _push(`<div class="hero__scrim" aria-hidden="true" data-v-a5f1206c></div><div class="hero__content" data-v-a5f1206c><p class="hero__eyebrow" data-v-a5f1206c>Plan your escape</p>`);
      _push(ssrRenderComponent(AppText, {
        as: "h1",
        id: "hero-heading",
        variant: "display",
        class: "hero__title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discover the coast<br data-v-a5f1206c${_scopeId}>and culture of<br data-v-a5f1206c${_scopeId}>Pangasinan `);
          } else {
            return [
              createTextVNode(" Discover the coast"),
              createVNode("br"),
              createTextVNode("and culture of"),
              createVNode("br"),
              createTextVNode("Pangasinan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "body",
        class: "hero__subtitle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` From the Hundred Islands to Cape Bolinao, plan a trip through the province&#39;s most iconic heritage sites \u2014 built for browsing on the go. `);
          } else {
            return [
              createTextVNode(" From the Hundred Islands to Cape Bolinao, plan a trip through the province's most iconic heritage sites \u2014 built for browsing on the go. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hero__actions" data-v-a5f1206c>`);
      _push(ssrRenderComponent(AppButton, {
        variant: "primary",
        tag: "a",
        href: "#sites"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Plan your visit `);
            _push2(ssrRenderComponent(AppIcon, {
              name: "arrow-right",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Plan your visit "),
              createVNode(AppIcon, {
                name: "arrow-right",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppButton, {
        variant: "ghost",
        tag: "a",
        href: "#about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about the province`);
          } else {
            return [
              createTextVNode("Learn about the province")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><dl class="hero__stats" data-v-a5f1206c><div class="hero__stat" data-v-a5f1206c>`);
      _push(ssrRenderComponent(AppIcon, {
        name: "pin",
        size: "md"
      }, null, _parent));
      _push(`<div data-v-a5f1206c><dt data-v-a5f1206c>124</dt><dd data-v-a5f1206c>Limestone islands in Lingayen Gulf</dd></div></div><div class="hero__stat" data-v-a5f1206c>`);
      _push(ssrRenderComponent(AppIcon, {
        name: "pin",
        size: "md"
      }, null, _parent));
      _push(`<div data-v-a5f1206c><dt data-v-a5f1206c>1905</dt><dd data-v-a5f1206c>Cape Bolinao Lighthouse first lit</dd></div></div></dl></div><div class="hero__scroll-cue" aria-hidden="true" data-v-a5f1206c><span class="hero__scroll-label" data-v-a5f1206c>Scroll</span><span class="hero__scroll-line" data-v-a5f1206c></span></div></section><div class="search-band" data-v-a5f1206c>`);
      _push(ssrRenderComponent(SearchForm, { onSearch: handleSearch }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(HeritageGrid, { sites: visibleSites.value }, null, _parent));
      _push(ssrRenderComponent(SiteFooter, {
        credits: [unref(heroPhoto).credit, ...unref(heritageSites).map((s) => s.credit)]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5f1206c"]]);

export { index as default };
//# sourceMappingURL=index-CH1vEAzL.mjs.map
