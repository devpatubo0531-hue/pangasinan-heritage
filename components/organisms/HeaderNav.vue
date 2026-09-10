<!--
  ORGANISM: Header Navigation
  Usage: once per page, fixed at the very top — combines the brand mark with
  the NavItem list and the mobile menu toggle. Starts transparent so it reads
  as part of the hero photo, then gains a solid background once the page
  scrolls past the hero (matches the reference layout's overlay-style nav).
  Pass the `solid` prop on pages with no dark hero photo behind the nav
  (e.g. heritage-sites.vue) so the brand text/links are visible immediately
  instead of waiting for scroll.

  The active nav item is derived from the current route path (via
  useRoute()) rather than hardcoded, so it stays correct as the user
  navigates between Home and Heritage Sites.

  Responsive logic:
  - Mobile (<768px): logo left, hamburger button right; tapping it reveals a
    full-width solid dropdown panel with stacked NavItems.
  - Desktop (≥768px): hamburger is hidden; NavItems render inline in a row.
-->
<template>
  <header class="header-nav" :class="{ 'header-nav--solid': solid || scrolled || menuOpen }">
    <div class="header-nav__bar">
      <a href="/" class="header-nav__brand">
        <span class="header-nav__brand-mark" aria-hidden="true">PH</span>
        <AppText as="span" variant="heading-md" class="header-nav__brand-text">
          Pangasinan Heritage
        </AppText>
      </a>

      <nav class="header-nav__nav header-nav__nav--desktop" aria-label="Primary">
        <NavItem label="Home" href="/" :active="currentPath === '/'" />
        <NavItem
          label="Heritage Sites"
          href="/heritage-sites"
          :active="currentPath === '/heritage-sites'"
        />
        <NavItem
         label="Culture"
           href="/culture"
          :active="currentPath === '/culture'"
        />
      </nav>

      <button
        class="header-nav__toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" size="lg" />
        <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-menu"
      class="header-nav__nav header-nav__nav--mobile"
      aria-label="Primary"
    >
      <NavItem label="Home" href="/" :active="currentPath === '/'" @click="menuOpen = false" />
      <NavItem
        label="Heritage Sites"
        href="/heritage-sites"
        :active="currentPath === '/heritage-sites'"
        @click="menuOpen = false"
      />
      <NavItem
      label="Culture"
      href="/culture"
      :active="currentPath === '/culture'"
      @click="menuOpen = false"
/>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppText from '../atoms/AppText.vue'
import AppIcon from '../atoms/AppIcon.vue'
import NavItem from '../molecules/NavItem.vue'

defineProps({
  solid: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const currentPath = computed(() => route.path)

const menuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);
}

.header-nav--solid {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.header-nav__bar {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
}

.header-nav__brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: #fff;
  transition: color var(--duration-fast) var(--ease-standard);
}

.header-nav--solid .header-nav__brand {
  color: var(--color-text);
}

.header-nav__brand-mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-primary-dark);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
}

.header-nav__brand-text {
  display: none;
  color: inherit;
}

@media (min-width: 420px) {
  .header-nav__brand-text {
    display: inline;
  }
}

.header-nav__nav--desktop {
  display: none;
}

.header-nav__toggle {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: var(--space-2);
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--duration-fast) var(--ease-standard);
}

.header-nav--solid .header-nav__toggle {
  color: var(--color-text);
}

.header-nav__nav--mobile {
  display: flex;
  flex-direction: column;
  padding: 0 var(--space-4) var(--space-3);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .header-nav__nav--desktop {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    color: #fff;
  }
  .header-nav--solid .header-nav__nav--desktop {
    color: var(--color-text);
  }
  .header-nav__toggle,
  .header-nav__nav--mobile {
    display: none;
  }
}
</style>