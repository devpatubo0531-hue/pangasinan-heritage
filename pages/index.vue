<template>
  <div id="top">
    <a href="#sites" class="skip-link">Skip to heritage sites</a>

    <HeaderNav />

    <section class="hero" aria-labelledby="hero-heading">
        <NuxtImg
          class="hero__photo"
          :src="heroPhoto.url"
          alt="Aerial view of limestone islands scattered across a turquoise gulf"
          fetchpriority="high"
          decoding="async"
          format="webp"
          quality="75"
          sizes="100vw sm:100vw md:1200px lg:1600px"
          width="1600"
           height="900"
          />
      <div class="hero__scrim" aria-hidden="true" />

      <div class="hero__content">
        <p class="hero__eyebrow">Plan your escape</p>
        <AppText as="h1" id="hero-heading" variant="display" class="hero__title">
          Discover the coast<br />and culture of<br />Pangasinan
        </AppText>
        <AppText as="p" variant="body" class="hero__subtitle">
          From the Hundred Islands to Cape Bolinao, plan a trip through the province's
          most iconic heritage sites — built for browsing on the go.
        </AppText>

        <div class="hero__actions">
          <AppButton variant="primary" tag="a" href="#sites">
            Plan your visit
            <AppIcon name="arrow-right" size="sm" />
          </AppButton>
          <AppButton variant="ghost" tag="a" href="#about">Learn about the province</AppButton>
        </div>

        <dl class="hero__stats">
          <div class="hero__stat">
            <AppIcon name="pin" size="md" />
            <div>
              <dt>124</dt>
              <dd>Limestone islands in Lingayen Gulf</dd>
            </div>
          </div>
          <div class="hero__stat">
            <AppIcon name="pin" size="md" />
            <div>
              <dt>1905</dt>
              <dd>Cape Bolinao Lighthouse first lit</dd>
            </div>
          </div>
        </dl>
      </div>

      <div class="hero__scroll-cue" aria-hidden="true">
        <span class="hero__scroll-label">Scroll</span>
        <span class="hero__scroll-line" />
      </div>
    </section>

    <div class="search-band">
      <SearchForm @search="handleSearch" />
    </div>

    <HeritageGrid :sites="visibleSites" />

    <SiteFooter :credits="[heroPhoto.credit, ...heritageSites.map((s) => s.credit)]" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { heritageSites, heroPhoto } from '../data/heritageSites.js'
import HeaderNav from '../components/organisms/HeaderNav.vue'
import HeritageGrid from '../components/organisms/HeritageGrid.vue'
import SiteFooter from '../components/organisms/SiteFooter.vue'
import SearchForm from '../components/molecules/SearchForm.vue'
import AppText from '../components/atoms/AppText.vue'
import AppButton from '../components/atoms/AppButton.vue'
import AppIcon from '../components/atoms/AppIcon.vue'

const searchQuery = ref('')

function handleSearch(query) {
  searchQuery.value = query
}

const visibleSites = computed(() => {
  if (!searchQuery.value) return heritageSites
  const q = searchQuery.value.toLowerCase()
  return heritageSites.filter(
    (site) =>
      site.name.toLowerCase().includes(q) || site.town.toLowerCase().includes(q)
  )
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 640px;
  height: 92vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  /* Content sits below the fixed transparent header; search card pinned to
     the bottom via margin-top:auto so it can overlap the hero's lower edge. */
  padding-top: 96px;
  color: #fff;
  /* No overflow:hidden here — the search card below is meant to overlap
     this section's lower edge. The photo itself is inset:0 so it never
     exceeds the hero's own bounds and needs no clipping. */
}

.hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__scrim {
  position: absolute;
  inset: 0;
  /* Darker from the left (where the text sits) fading toward the photo detail on the right */
  background: linear-gradient(
    100deg,
    rgba(5, 20, 20, 0.88) 0%,
    rgba(5, 20, 20, 0.6) 42%,
    rgba(5, 20, 20, 0.15) 75%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--content-max);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-4);
  box-sizing: border-box;
}

.hero__eyebrow {
  margin: 0 0 var(--space-3);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
}

.hero__title {
  color: #fff;
  max-width: 14ch;
}

.hero__subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 42ch;
  margin-top: var(--space-4);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  margin: var(--space-7) 0 0;
  max-width: 46ch;
}

.hero__stat {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  color: var(--color-accent);
}

.hero__stat dt {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  color: #fff;
}

.hero__stat dd {
  margin: 0;
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.75);
  max-width: 20ch;
}

.hero__scroll-cue {
  position: absolute;
  right: var(--space-4);
  bottom: var(--space-8);
  z-index: 1;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.7);
}

.hero__scroll-label {
  writing-mode: vertical-rl;
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
}

@media (min-width: 1024px) {
  .hero__scroll-cue {
    display: flex;
  }
}

.search-band {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) 0;
}
</style>