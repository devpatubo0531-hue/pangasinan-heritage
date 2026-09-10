<!--
  ATOM: Typography
  Usage: every piece of text on the site should render through this component
  (or the .eyebrow/.text-muted utility classes it documents) so heading levels,
  sizes and fonts stay consistent instead of one-off inline styles.
  Example: <AppText as="h1" variant="display">Discover Pangasinan</AppText>
-->
<template>
  <component :is="as" class="app-text" :class="`app-text--${variant}`">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'p' // semantic tag: h1, h2, h3, p, span...
  },
  variant: {
    type: String,
    default: 'body',
    validator: (v) =>
      ['display', 'heading-lg', 'heading-md', 'body', 'body-sm', 'muted'].includes(v)
  }
})
</script>

<style scoped>
.app-text {
  margin: 0;
  font-family: var(--font-body);
  color: var(--color-text);
}

.app-text--display {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

@media (min-width: 768px) {
  .app-text--display {
    font-size: var(--text-4xl);
  }
}

.app-text--heading-lg {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 1.2;
}

.app-text--heading-md {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.3;
}

.app-text--body {
  font-size: var(--text-base);
}

.app-text--body-sm {
  font-size: var(--text-sm);
}

.app-text--muted {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
</style>
