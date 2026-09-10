<!--
  ORGANISM: Heritage Grid
  Usage: the home screen's main content section — renders every heritage
  site as a HeritageCard. Combines Typography (section heading) with a list
  of molecules; owns the responsive column logic so individual cards stay
  simple. Cards here hide their own per-site "Explore" link (showExploreLink
  false) since the whole section funnels to a single "Explore more heritage
  sites" CTA that links to the full /heritage-sites listing instead.

  Responsive logic:
  - Mobile (<600px): 1 column, cards stacked full-width.
  - Tablet (600–1023px): 2 columns via CSS grid `auto-fit`/`minmax`.
  - Desktop (≥1024px): 3 columns, matching the three sample heritage sites.
  - `gap` scales with the spacing tokens rather than a fixed pixel value.
-->
<template>
  <section id="sites" class="heritage-grid" aria-labelledby="heritage-grid-heading">
    <div class="heritage-grid__intro">
      <AppText as="h2" id="heritage-grid-heading" variant="heading-lg">
        Featured heritage sites
      </AppText>
      <AppText as="p" variant="muted">
        Three places that define Pangasinan's coastline, history, and natural springs.
      </AppText>
    </div>

    <div class="heritage-grid__list">
    <HeritageCard v-for="site in sites" :key="site.id" :site="site" :id="site.id" />
    </div>

    <div class="heritage-grid__cta">
      <a class="heritage-grid__more" href="/heritage-sites">
        Explore more heritage sites
        <AppIcon name="arrow-right" size="sm" />
      </a>
    </div>
  </section>
</template>

<script setup>
import AppText from '../atoms/AppText.vue'
import AppIcon from '../atoms/AppIcon.vue'
import HeritageCard from '../molecules/HeritageCard.vue'

defineProps({
  sites: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.heritage-grid {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) var(--space-7);
}

.heritage-grid__intro {
  margin-bottom: var(--space-6);
  max-width: 40ch;
}

.heritage-grid__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 600px) {
  .heritage-grid__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .heritage-grid__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.heritage-grid__cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-6);
}

.heritage-grid__more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-primary-dark);
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  transition: background-color var(--duration-fast) var(--ease-standard);
}

.heritage-grid__more:hover {
  background: var(--color-surface-muted, rgba(0, 0, 0, 0.03));
}
</style>