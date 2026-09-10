<!--
  MOLECULE: Heritage Card
  Usage: exclusively for displaying a single heritage site preview inside the
  Heritage Grid on the Home and Heritage Sites screens. Not for generic
  content previews — the "town" tag and "Explore" link are specific to a
  tourism site record. "Explore" navigates to that site's own detail screen
  at /heritage-sites/[id], rather than opening an in-page modal.

  Responsive logic:
  - Mobile (<600px): full-width stacked card, image on top, text below.
  - Tablet (600–1023px): two per row via CSS grid on the parent HeritageGrid;
    the card itself doesn't change internally, only its column width shrinks.
  - Desktop (≥1024px): three per row; image aspect-ratio stays fixed at 4/3
    so rows stay visually aligned regardless of column count.
-->
<template>
  <article class="heritage-card">
    <AppImage :src="site.photo" :alt="site.name" ratio="4 / 3">
      <SiteIllustration :name="site.illustration" />
    </AppImage>

    <div class="heritage-card__body">
      <p class="heritage-card__town">
        <AppIcon name="pin" size="sm" />
        {{ site.town }}
      </p>
      <AppText as="h3" variant="heading-md">{{ site.name }}</AppText>
      <AppText as="p" variant="body-sm" class="heritage-card__desc">
        {{ site.description }}
      </AppText>
      <NuxtLink :to="`/heritage-sites/${site.id}`" class="heritage-card__link">
        Explore
        <AppIcon name="arrow-right" size="sm" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
// Explicit imports (rather than relying on Nuxt's auto-import) so this
// component also renders correctly in plain Vite/Vue playgrounds and previews.
import AppImage from '../atoms/AppImage.vue'
import SiteIllustration from '../atoms/SiteIllustration.vue'
import AppIcon from '../atoms/AppIcon.vue'
import AppText from '../atoms/AppText.vue'

defineProps({
  site: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.heritage-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.heritage-card__body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.heritage-card__town {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-primary);
}

.heritage-card__desc {
  color: var(--color-text-muted);
  flex: 1;
}

.heritage-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-2);
  font-family: inherit;
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-primary-dark);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
}

.heritage-card__link:hover {
  color: var(--color-accent-dark);
}
</style>