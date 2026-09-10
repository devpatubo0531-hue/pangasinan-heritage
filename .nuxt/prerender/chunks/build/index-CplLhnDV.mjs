import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/server-renderer/index.mjs';
import { h as heritageSites } from './heritageSites-B5Ar7zW6.mjs';
import { H as HeaderNav, A as AppText } from './SiteIllustration-Df7uS_j9.mjs';
import { S as SearchForm, H as HeritageCard } from './SearchForm-CsBJ2CsX.mjs';
import { _ as _export_sfc } from './server.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "top" }, _attrs))} data-v-7379d89e><a href="#results" class="skip-link" data-v-7379d89e>Skip to heritage sites</a>`);
      _push(ssrRenderComponent(HeaderNav, { solid: "" }, null, _parent));
      _push(`<div class="search-band search-band--top" data-v-7379d89e>`);
      _push(ssrRenderComponent(SearchForm, { onSearch: handleSearch }, null, _parent));
      _push(`</div><section id="results" class="site-list" aria-labelledby="site-list-heading" data-v-7379d89e>`);
      _push(ssrRenderComponent(AppText, {
        as: "h2",
        id: "site-list-heading",
        variant: "heading-lg",
        class: "site-list__heading"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Destinations `);
          } else {
            return [
              createTextVNode(" Destinations ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (visibleSites.value.length) {
        _push(`<div class="site-list__grid" data-v-7379d89e><!--[-->`);
        ssrRenderList(visibleSites.value, (site) => {
          _push(ssrRenderComponent(HeritageCard, {
            key: site.id,
            site,
            id: site.id
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="site-list__empty" data-v-7379d89e> No heritage sites match your search. Try a different town or name. </p>`);
      }
      _push(`</section><footer class="site-footer" id="about" data-v-7379d89e><p data-v-7379d89e>Pangasinan \xB7 Heritage Digital Showcase</p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/heritage-sites/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7379d89e"]]);

export { index as default };
//# sourceMappingURL=index-CplLhnDV.mjs.map
