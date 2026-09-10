<!--
  ATOM: Image
  Usage: any raster/vector visual that represents real content (a heritage
  site, the hero scene). Wraps <img> OR an inline SVG illustration slot behind
  one consistent aspect-ratio box, so the layout never jumps while loading —
  important on slow mobile connections. Always requires alt text (or role
  presentation) so it meets WCAG 2.1 AA 1.1.1.
-->
<template>
  <div class="app-image" :style="{ aspectRatio: ratio }">
    <NuxtImg
      v-if="src && !failed"
      :src="src"
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      format="webp"
      quality="75"
      sizes="sm:100vw md:50vw lg:400px"
      decoding="async"
      class="app-image__el"
      @error="failed = true"
    />
    <!-- Falls back to the illustration slot if the photo URL ever breaks -->
    <div v-else class="app-image__el app-image__illustration" role="img" :aria-label="alt">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, default: '' },
  alt: { type: String, required: true },
  ratio: { type: String, default: '4 / 3' },
  priority: { type: Boolean, default: false } // true for the above-the-fold hero image
})

const failed = ref(false)
</script>

<style scoped>
.app-image {
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-primary-tint);
}

.app-image__el {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app-image__illustration {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-image__illustration :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>