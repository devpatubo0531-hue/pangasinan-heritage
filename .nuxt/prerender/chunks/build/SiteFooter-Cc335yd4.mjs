import { mergeProps, useSSRContext } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "SiteFooter",
  __ssrInlineRender: true,
  props: {
    // Optional list of photo-credit strings shown in small print, e.g.
    // ['Shot By Joe', 'Luise and Nic']. Omit on pages with no stock photos.
    credits: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "site-footer",
        id: "about"
      }, _attrs))} data-v-d040b6da><p data-v-d040b6da>Pangasinan \xB7 Heritage Digital Showcase</p></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/SiteFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d040b6da"]]);

export { SiteFooter as S };
//# sourceMappingURL=SiteFooter-Cc335yd4.mjs.map
