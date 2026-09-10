import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { h as heritageSites } from './heritageSites-B5Ar7zW6.mjs';
import { H as HeaderNav, A as AppText } from './SiteIllustration-Df7uS_j9.mjs';
import { S as SearchForm, H as HeritageCard } from './SearchForm-CsBJ2CsX.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'node:crypto';
import './v3-PufbtLol.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './nuxt-link-BDgLvM3W.mjs';

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
