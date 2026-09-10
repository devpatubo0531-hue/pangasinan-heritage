<!--
  ATOM: Icon
  Usage: small inline symbols paired with actions or labels — inside NavItem,
  SearchForm, and Button when a visual cue helps scanning. Inline SVG (not an
  icon font or sprite request) keeps the payload tiny for 3G/4G users.
-->
<template>
  <svg
    class="app-icon"
    :class="`app-icon--${size}`"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-if="name === 'search'" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" />
    <path v-else-if="name === 'menu'" d="M4 7h16M4 12h16M4 17h16" />
    <path v-else-if="name === 'close'" d="M6 6l12 12M18 6 6 18" />
    <path
      v-else-if="name === 'pin'"
      d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
    />
    <circle v-if="name === 'pin'" cx="12" cy="10" r="2.5" />
    <path v-else-if="name === 'arrow-right'" d="M5 12h14M13 6l6 6-6 6" />
    <template v-else-if="name === 'calendar'">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </template>
    <template v-else-if="name === 'route'">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M5 8v3a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4" stroke-dasharray="3 3" />
    </template>
    <template v-else-if="name === 'ticket'">
      <path
        d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z"
      />
      <path d="M13 7v10" stroke-dasharray="2 2" />
    </template>
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    validator: (v) =>
      ['search', 'menu', 'close', 'pin', 'arrow-right', 'calendar', 'route', 'ticket'].includes(
        v
      )
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  }
})
</script>

<style scoped>
.app-icon--sm {
  width: 16px;
  height: 16px;
}
.app-icon--md {
  width: 20px;
  height: 20px;
}
.app-icon--lg {
  width: 28px;
  height: 28px;
}
</style>