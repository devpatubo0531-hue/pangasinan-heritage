import { mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/vue/server-renderer/index.mjs';
import { H as HeaderNav, A as AppText, a as AppIcon, b as AppImage, c as _sfc_main$2 } from './SiteIllustration-Df7uS_j9.mjs';
import { S as SiteFooter } from './SiteFooter-Cc335yd4.mjs';
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
import 'file://C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unctx/dist/index.mjs';

const _sfc_main$1 = {
  __name: "CultureCard",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    meta: { type: String, required: true },
    metaIcon: { type: String, default: "pin" },
    illustration: { type: String, default: "festival" },
    // Optional real photo URL — falls back to the SiteIllustration slot
    // automatically if omitted or if the URL fails to load (see AppImage).
    photo: { type: String, default: "" },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["culture-card", { "culture-card--compact": __props.compact }]
      }, _attrs))} data-v-715ced5d>`);
      if (!__props.compact) {
        _push(ssrRenderComponent(AppImage, {
          src: __props.photo,
          alt: __props.title,
          ratio: "16 / 9"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, { name: __props.illustration }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, { name: __props.illustration }, null, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="culture-card__body" data-v-715ced5d><p class="culture-card__meta" data-v-715ced5d>`);
      _push(ssrRenderComponent(AppIcon, {
        name: __props.metaIcon,
        size: "sm"
      }, null, _parent));
      _push(` ${ssrInterpolate(__props.meta)}</p>`);
      _push(ssrRenderComponent(AppText, {
        as: "h3",
        variant: "heading-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "body-sm",
        class: "culture-card__desc"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/CultureCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CultureCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-715ced5d"]]);
const festivals = [
  {
    id: "bangus-festival",
    name: "Bangus Festival",
    town: "Dagupan City",
    month: "April",
    description: "Dagupan\u2019s month-long tribute to the milkfish (bangus) that built its economy, with a street parade, cooking competitions, and the search for the world\u2019s longest grilled bangus.",
    illustration: "festival",
    photo: "/images/bangus.jpg",
    credit: "Romeio Paul"
  },
  {
    id: "pistay-dayat",
    name: "Pista'y Dayat",
    town: "Lingayen",
    month: "May",
    description: "A fishing-town thanksgiving festival held along Lingayen\u2019s shoreline, giving thanks to the sea with a fluvial procession, fresh catch, and beachside festivities.",
    illustration: "festival",
    photo: "/images/pistay_dayat.jpeg",
    credit: "Niels Steeman"
  }
];
const flavors = [
  {
    id: "puto-calasiao",
    name: "Puto Calasiao",
    town: "Calasiao",
    description: "A small, dense steamed rice cake that made the town of Calasiao famous nationwide \u2014 usually sold by the bilao (tray) alongside coffee or hot chocolate.",
    photo: "/images/puto_calasiao.jpg",
    credit: "Jo\xE3o Luiz Borba Lima"
  },
  {
    id: "bagoong-alaminos",
    name: "Bagoong",
    town: "Alaminos",
    description: "Fermented fish or shrimp paste, a staple condiment across Pangasinan cooking \u2014 Alaminos and nearby coastal towns are especially known for it.",
    photo: "/images/bagoong.jpg",
    credit: "P. L."
  },
  {
    id: "pigar-pigar",
    name: "Pigar-Pigar",
    town: "Dagupan City",
    description: "Thinly sliced beef stir-fried with onions, cabbage, and beef fat until slightly crisp \u2014 a Dagupan street-food specialty best eaten hot off the griddle.",
    photo: "/images/pigar_pigar.jpg",
    credit: "Raman"
  },
  {
    id: "tupig",
    name: "Tupig",
    town: "Province-wide",
    description: "Sticky rice, coconut, and sugar wrapped in banana or coconut leaves and grilled over charcoal until lightly charred \u2014 a common pasalubong (homecoming gift).",
    photo: "/images/tupig.jpg",
    credit: "Eiliv Aceron"
  }
];
const languageFacts = {
  name: "Pangasinan (Pangasinense)",
  speakerEstimate: "1.2M+",
  description: 'Pangasinan is one of the major Philippine languages, spoken mainly across the province and parts of neighboring Tarlac, Nueva Ecija, and La Union. It has its own literary tradition, including the folk epic "Bilbil" and locally staged zarzuela theater.'
};
const _sfc_main = {
  __name: "culture",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "top" }, _attrs))} data-v-e92964f6><a href="#festivals" class="skip-link" data-v-e92964f6>Skip to content</a>`);
      _push(ssrRenderComponent(HeaderNav, { solid: "" }, null, _parent));
      _push(`<section class="page-hero" data-v-e92964f6><div class="page-hero__pattern" aria-hidden="true" data-v-e92964f6><svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMax slice" data-v-e92964f6><circle cx="40" cy="130" r="10" fill="var(--color-accent)" opacity="0.5" data-v-e92964f6></circle><circle cx="90" cy="150" r="6" fill="var(--color-accent)" opacity="0.7" data-v-e92964f6></circle><circle cx="150" cy="120" r="8" fill="var(--color-primary-light)" opacity="0.6" data-v-e92964f6></circle><circle cx="220" cy="145" r="12" fill="var(--color-accent)" opacity="0.4" data-v-e92964f6></circle><circle cx="290" cy="125" r="7" fill="var(--color-primary-light)" opacity="0.6" data-v-e92964f6></circle><circle cx="350" cy="150" r="9" fill="var(--color-accent)" opacity="0.5" data-v-e92964f6></circle></svg></div><div class="page-hero__content" data-v-e92964f6><p class="page-hero__eyebrow" data-v-e92964f6>Traditions &amp; flavors</p>`);
      _push(ssrRenderComponent(AppText, {
        as: "h1",
        variant: "display",
        class: "page-hero__title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Culture &amp; traditions of Pangasinan `);
          } else {
            return [
              createTextVNode(" Culture & traditions of Pangasinan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "body",
        class: "page-hero__subtitle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beyond its coastline, Pangasinan carries its own festivals, food, and language \u2014 shaped by fishing towns, river deltas, and centuries of trade. `);
          } else {
            return [
              createTextVNode(" Beyond its coastline, Pangasinan carries its own festivals, food, and language \u2014 shaped by fishing towns, river deltas, and centuries of trade. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="section" id="festivals" aria-labelledby="festivals-heading" data-v-e92964f6><div class="section__intro" data-v-e92964f6>`);
      _push(ssrRenderComponent(AppText, {
        as: "h2",
        id: "festivals-heading",
        variant: "heading-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Festivals`);
          } else {
            return [
              createTextVNode("Festivals")
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
            _push2(` Two of the province&#39;s biggest yearly celebrations, both tied to the sea. `);
          } else {
            return [
              createTextVNode(" Two of the province's biggest yearly celebrations, both tied to the sea. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="festival-grid" data-v-e92964f6><!--[-->`);
      ssrRenderList(unref(festivals), (festival) => {
        _push(ssrRenderComponent(CultureCard, {
          key: festival.id,
          title: festival.name,
          description: festival.description,
          meta: `${festival.town} \u2014 ${festival.month}`,
          "meta-icon": "calendar",
          illustration: festival.illustration,
          photo: festival.photo
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section class="section section--tint" aria-labelledby="flavors-heading" data-v-e92964f6><div class="section__intro" data-v-e92964f6>`);
      _push(ssrRenderComponent(AppText, {
        as: "h2",
        id: "flavors-heading",
        variant: "heading-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Flavors of Pangasinan`);
          } else {
            return [
              createTextVNode("Flavors of Pangasinan")
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
            _push2(` A handful of dishes and delicacies worth seeking out town by town. `);
          } else {
            return [
              createTextVNode(" A handful of dishes and delicacies worth seeking out town by town. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flavor-grid" data-v-e92964f6><!--[-->`);
      ssrRenderList(unref(flavors), (flavor) => {
        _push(ssrRenderComponent(CultureCard, {
          key: flavor.id,
          title: flavor.name,
          description: flavor.description,
          meta: flavor.town,
          "meta-icon": "pin",
          illustration: "food",
          photo: flavor.photo
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section class="section language-section" aria-labelledby="language-heading" data-v-e92964f6><div class="language-section__text" data-v-e92964f6>`);
      _push(ssrRenderComponent(AppText, {
        as: "h2",
        id: "language-heading",
        variant: "heading-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The Pangasinan language `);
          } else {
            return [
              createTextVNode(" The Pangasinan language ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(languageFacts).description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(languageFacts).description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="language-section__stat" data-v-e92964f6>`);
      _push(ssrRenderComponent(AppIcon, {
        name: "pin",
        size: "lg"
      }, null, _parent));
      _push(`<div data-v-e92964f6>`);
      _push(ssrRenderComponent(AppText, {
        as: "p",
        variant: "heading-lg",
        class: "language-section__stat-number"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(languageFacts).speakerEstimate)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(languageFacts).speakerEstimate), 1)
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
            _push2(`Estimated speakers of ${ssrInterpolate(unref(languageFacts).name)}`);
          } else {
            return [
              createTextVNode("Estimated speakers of " + toDisplayString(unref(languageFacts).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/culture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const culture = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e92964f6"]]);

export { culture as default };
//# sourceMappingURL=culture-CsZ7C96f.mjs.map
