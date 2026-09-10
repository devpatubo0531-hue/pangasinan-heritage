<!--
  ORGANISM: Site Footer
  Usage: once per page, at the very bottom. Extracted as its own component
  once the project grew past one screen, so Home, Heritage Sites, and Culture
  all share the exact same footer instead of copy-pasted markup.
-->
<template>
  <footer class="site-footer" id="about">
    <p>Pangasinan &middot; Heritage Digital Showcase</p>
  </footer>
</template>

<script setup>
defineProps({
  // Optional list of photo-credit strings shown in small print, e.g.
  // ['Shot By Joe', 'Luise and Nic']. Omit on pages with no stock photos.
  credits: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.site-footer {
  background: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: var(--space-5);
  font-size: var(--text-sm);
}

.site-footer p {
  margin: 0 0 var(--space-1);
}

.site-footer__credits {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.55);
}
</style>