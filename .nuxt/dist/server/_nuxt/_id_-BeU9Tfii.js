import { _ as __nuxt_component_0 } from "./nuxt-link-BDgLvM3W.js";
import { computed, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { h as heritageSites } from "./heritageSites-B5Ar7zW6.js";
import { H as HeaderNav, a as AppIcon, A as AppText, b as AppImage, c as _sfc_main$1 } from "./SiteIllustration-Df7uS_j9.js";
import { S as SiteFooter } from "./SiteFooter-Cc335yd4.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ufo/dist/index.mjs";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/defu/dist/defu.mjs";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/h3/dist/index.mjs";
import "./v3-PufbtLol.js";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/hookable/dist/index.mjs";
import "C:/Users/LENOVO/Downloads/pangasinan-heritage/node_modules/unctx/dist/index.mjs";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const site = computed(() => heritageSites.find((s) => s.id === route.params.id));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (site.value) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-870df99a><a href="#details" class="skip-link" data-v-870df99a>Skip to details</a>`);
        _push(ssrRenderComponent(HeaderNav, null, null, _parent));
        _push(`<section class="detail-hero" aria-labelledby="detail-hero-heading" data-v-870df99a><img class="detail-hero__photo"${ssrRenderAttr("src", site.value.photo)}${ssrRenderAttr("alt", site.value.name)} fetchpriority="high" decoding="async" data-v-870df99a><div class="detail-hero__scrim" aria-hidden="true" data-v-870df99a></div><div class="detail-hero__content" data-v-870df99a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/heritage-sites",
          class: "detail-hero__back"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(AppIcon, {
                name: "arrow-right",
                size: "sm",
                class: "detail-hero__back-icon"
              }, null, _parent2, _scopeId));
              _push2(` Back to Destinations `);
            } else {
              return [
                createVNode(AppIcon, {
                  name: "arrow-right",
                  size: "sm",
                  class: "detail-hero__back-icon"
                }),
                createTextVNode(" Back to Destinations ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="detail-hero__town" data-v-870df99a>`);
        _push(ssrRenderComponent(AppIcon, {
          name: "pin",
          size: "sm"
        }, null, _parent));
        _push(` ${ssrInterpolate(site.value.town)}</p>`);
        _push(ssrRenderComponent(AppText, {
          as: "h1",
          id: "detail-hero-heading",
          variant: "display",
          class: "detail-hero__title"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(site.value.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(site.value.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (site.value.rating) {
          _push(`<p class="detail-hero__rating" data-v-870df99a> ★ ${ssrInterpolate(site.value.rating)} <span data-v-870df99a>(${ssrInterpolate(site.value.reviewCount)} reviews)</span></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section><section id="details" class="detail-facts" data-v-870df99a><div class="detail-facts__grid" data-v-870df99a><div class="fact-card" data-v-870df99a>`);
        _push(ssrRenderComponent(AppIcon, {
          name: "calendar",
          size: "lg"
        }, null, _parent));
        _push(`<div data-v-870df99a>`);
        _push(ssrRenderComponent(AppText, {
          as: "h2",
          variant: "heading-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Best Time to Visit`);
            } else {
              return [
                createTextVNode("Best Time to Visit")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppText, {
          as: "p",
          variant: "body-sm",
          class: "fact-card__text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(site.value.bestTime)}`);
            } else {
              return [
                createTextVNode(toDisplayString(site.value.bestTime), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="fact-card" data-v-870df99a>`);
        _push(ssrRenderComponent(AppIcon, {
          name: "route",
          size: "lg"
        }, null, _parent));
        _push(`<div data-v-870df99a>`);
        _push(ssrRenderComponent(AppText, {
          as: "h2",
          variant: "heading-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`How to Get There`);
            } else {
              return [
                createTextVNode("How to Get There")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppText, {
          as: "p",
          variant: "body-sm",
          class: "fact-card__text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(site.value.howToGetThere)}`);
            } else {
              return [
                createTextVNode(toDisplayString(site.value.howToGetThere), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="fact-card" data-v-870df99a>`);
        _push(ssrRenderComponent(AppIcon, {
          name: "ticket",
          size: "lg"
        }, null, _parent));
        _push(`<div data-v-870df99a>`);
        _push(ssrRenderComponent(AppText, {
          as: "h2",
          variant: "heading-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Entrance Fee`);
            } else {
              return [
                createTextVNode("Entrance Fee")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppText, {
          as: "p",
          variant: "body-sm",
          class: "fact-card__text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(site.value.entranceFee)}`);
            } else {
              return [
                createTextVNode(toDisplayString(site.value.entranceFee), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></section><section class="detail-about" data-v-870df99a>`);
        _push(ssrRenderComponent(AppText, {
          as: "h2",
          variant: "heading-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About ${ssrInterpolate(site.value.name)}`);
            } else {
              return [
                createTextVNode("About " + toDisplayString(site.value.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppText, {
          as: "p",
          variant: "body",
          class: "detail-about__text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(site.value.fullDescription)}`);
            } else {
              return [
                createTextVNode(toDisplayString(site.value.fullDescription), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
        if (site.value.gallery && site.value.gallery.length) {
          _push(`<section class="detail-gallery" data-v-870df99a>`);
          _push(ssrRenderComponent(AppText, {
            as: "h2",
            variant: "heading-lg",
            class: "detail-gallery__heading"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Gallery`);
              } else {
                return [
                  createTextVNode("Gallery")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="detail-gallery__grid" data-v-870df99a><!--[-->`);
          ssrRenderList(site.value.gallery, (image, i) => {
            _push(ssrRenderComponent(AppImage, {
              key: i,
              src: image.url,
              alt: `${site.value.name} — photo ${i + 1}`,
              ratio: "4 / 3"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    name: site.value.illustration
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      name: site.value.illustration
                    }, null, 8, ["name"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(SiteFooter, {
          credits: (site.value.gallery || []).map((g) => g.credit)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-found" }, _attrs))} data-v-870df99a>`);
        _push(ssrRenderComponent(HeaderNav, { solid: "" }, null, _parent));
        _push(`<div class="not-found__content" data-v-870df99a>`);
        _push(ssrRenderComponent(AppText, {
          as: "h1",
          variant: "heading-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Site not found`);
            } else {
              return [
                createTextVNode("Site not found")
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
              _push2(` We couldn&#39;t find a heritage site matching that link. `);
            } else {
              return [
                createTextVNode(" We couldn't find a heritage site matching that link. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/heritage-sites",
          class: "not-found__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Destinations `);
              _push2(ssrRenderComponent(AppIcon, {
                name: "arrow-right",
                size: "sm"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Back to Destinations "),
                createVNode(AppIcon, {
                  name: "arrow-right",
                  size: "sm"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(SiteFooter, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/heritage-sites/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-870df99a"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BeU9Tfii.js.map
