<!--
  MOLECULE: Culture Card
  Usage: a single festival, dish, or craft tradition on the Culture screen.
  Distinct from Heritage Card (which is a place you visit) — this describes
  an intangible cultural practice, so it swaps the "town" tag for a flexible
  "meta" tag (e.g. a month, or a town name) and drops rating/bookmark/Explore
  entirely since there's no single place to navigate to.

  Responsive logic:
  - Compact variant (used for cuisine) has no image and stacks tightly for a
    dense 2–4 column grid.
  - Full variant (used for festivals) includes the image and behaves like a
    standard content card, 1 col mobile / 2 col tablet+.
-->
<template>
  <article class="culture-card" :class="{ 'culture-card--compact': compact }">
    <AppImage v-if="!compact" :src="photo" :alt="title" ratio="16 / 9">
      <SiteIllustration :name="illustration" />
    </AppImage>

    <div class="culture-card__body">
      <p class="culture-card__meta">
        <AppIcon :name="metaIcon" size="sm" />
        {{ meta }}
      </p>
      <AppText as="h3" variant="heading-md">
        {{ title }}
      </AppText>
      <AppText as="p" variant="body-sm" class="culture-card__desc">
        {{ description }}
      </AppText>
    </div>
  </article>
</template>

<script setup>
import AppImage from '../atoms/AppImage.vue'
import SiteIllustration from '../atoms/SiteIllustration.vue'
import AppIcon from '../atoms/AppIcon.vue'
import AppText from '../atoms/AppText.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  meta: { type: String, required: true },
  metaIcon: { type: String, default: 'pin' },
  illustration: { type: String, default: 'festival' },
  // Optional real photo URL — falls back to the SiteIllustration slot
  // automatically if omitted or if the URL fails to load (see AppImage).
  photo: { type: String, default: '' },
  compact: { type: Boolean, default: false }
})
</script>

<style scoped>
.culture-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.culture-card__body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.culture-card--compact .culture-card__body {
  padding: var(--space-4);
}

.culture-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-primary);
}

.culture-card__desc {
  color: var(--color-text-muted);
  flex: 1;
}
</style>