<!--
  Supporting atom for AppImage: original line illustrations standing in
  for photography (keeps the bundle tiny and avoids licensing real photos).
-->
<template>
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="var(--color-primary-tint)" />

    <template v-if="name === 'islands'">
      <path d="M0 105 Q50 90 100 105 T200 105 V150 H0 Z" fill="var(--color-primary-light)" />
      <path d="M0 120 Q50 108 100 120 T200 120 V150 H0 Z" fill="var(--color-primary)" />
      <ellipse cx="60" cy="98" rx="34" ry="18" fill="var(--color-primary-dark)" />
      <ellipse cx="130" cy="102" rx="26" ry="14" fill="var(--color-primary-dark)" />
      <circle cx="165" cy="30" r="16" fill="var(--color-accent)" />
    </template>

    <template v-else-if="name === 'lighthouse'">
      <circle cx="150" cy="35" r="14" fill="var(--color-accent-tint)" />
      <path d="M0 130 Q100 110 200 130 V150 H0 Z" fill="var(--color-primary)" />
      <rect x="82" y="55" width="26" height="70" fill="var(--color-primary-dark)" />
      <path d="M82 55 L95 30 L108 55 Z" fill="var(--color-accent)" />
      <rect x="86" y="70" width="18" height="10" fill="var(--color-accent-tint)" />
      <path d="M108 60 L150 45" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round" />
    </template>

    <template v-else-if="name === 'hotspring'">
      <path d="M0 150 L40 70 L80 150 Z" fill="var(--color-primary-light)" />
      <path d="M60 150 L110 55 L160 150 Z" fill="var(--color-primary)" />
      <ellipse cx="100" cy="128" rx="55" ry="20" fill="var(--color-accent-tint)" />
      <ellipse cx="100" cy="128" rx="42" ry="14" fill="var(--color-accent)" />
      <path
        d="M85 95 Q80 85 88 78 M100 95 Q95 82 105 73 M115 95 Q110 85 118 78"
        stroke="var(--color-surface)"
        stroke-width="3"
        stroke-linecap="round"
        fill="none"
        opacity="0.8"
      />
    </template>

    <template v-else-if="name === 'festival'">
      <path d="M0 130 Q100 115 200 130 V150 H0 Z" fill="var(--color-primary-light)" />
      <path d="M20 130 L20 60" stroke="var(--color-primary-dark)" stroke-width="3" />
      <path d="M180 130 L180 60" stroke="var(--color-primary-dark)" stroke-width="3" />
      <path
        d="M20 60 Q60 90 100 60 T180 60"
        fill="none"
        stroke="var(--color-primary-dark)"
        stroke-width="3"
      />
      <circle cx="30" cy="66" r="6" fill="var(--color-accent)" />
      <circle cx="60" cy="80" r="6" fill="var(--color-primary-dark)" />
      <circle cx="90" cy="68" r="6" fill="var(--color-accent-dark)" />
      <circle cx="120" cy="80" r="6" fill="var(--color-primary-dark)" />
      <circle cx="150" cy="66" r="6" fill="var(--color-accent)" />
      <circle cx="170" cy="76" r="6" fill="var(--color-accent-dark)" />
    </template>

    <template v-else>
      <ellipse cx="100" cy="100" rx="60" ry="16" fill="var(--color-accent-tint)" />
      <ellipse cx="100" cy="95" rx="60" ry="16" fill="var(--color-accent)" />
      <ellipse cx="100" cy="90" rx="46" ry="10" fill="var(--color-primary-dark)" opacity="0.15" />
      <path
        d="M55 60 Q100 35 145 60"
        fill="none"
        stroke="var(--color-primary-dark)"
        stroke-width="3"
        stroke-linecap="round"
      />
    </template>
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    validator: (v) =>
      ['islands', 'lighthouse', 'hotspring', 'festival', 'food'].includes(v)
  }
})
</script>