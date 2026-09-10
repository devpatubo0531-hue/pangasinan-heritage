<!--
  MOLECULE: Navigation Item
  Usage: one entry inside Header Navigation's link list — combines Typography
  styling with the active/current-page state. Not a standalone atom because
  it always carries this active-state behavior tied to routing.

  Responsive logic:
  - Mobile: rendered inside the slide-down menu, full-width, larger tap target.
  - Desktop (≥768px): rendered inline in the header row, compact padding.
-->
<template>
  <a class="nav-item" :class="{ 'nav-item--active': active }" :href="href">
    {{ label }}
  </a>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  href: { type: String, default: '#' },
  active: { type: Boolean, default: false }
})
</script>

<style scoped>
.nav-item {
  display: block;
  padding: var(--space-3) var(--space-2);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.nav-item:hover {
  color: var(--color-primary);
}

.nav-item--active {
  color: var(--color-primary);
  font-weight: 600;
}

@media (min-width: 768px) {
  .nav-item {
    padding: var(--space-2) var(--space-1);
  }
  .nav-item--active {
    border-bottom-color: var(--color-accent);
  }
}
</style>
