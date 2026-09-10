<template>
  <div id="top">
    <a href="#results" class="skip-link">Skip to heritage sites</a>

    <HeaderNav solid />

    <div class="search-band search-band--top">
      <SearchForm @search="handleSearch" />
    </div>

    <section id="results" class="site-list" aria-labelledby="site-list-heading">
      <AppText as="h2" id="site-list-heading" variant="heading-lg" class="site-list__heading">
        Destinations
      </AppText>

      <div v-if="visibleSites.length" class="site-list__grid">
        <HeritageCard v-for="site in visibleSites" :key="site.id" :site="site" :id="site.id" />
      </div>
      <p v-else class="site-list__empty">
        No heritage sites match your search. Try a different town or name.
      </p>
    </section>

    <footer class="site-footer" id="about">
      <p>Pangasinan &middot; Heritage Digital Showcase</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { heritageSites } from '../../data/heritageSites.js'
import HeaderNav from '../components/organisms/HeaderNav.vue'
import HeritageCard from '../components/molecules/HeritageCard.vue'
import SearchForm from '../components/molecules/SearchForm.vue'
import AppText from '../components/atoms/AppText.vue'

const searchQuery = ref('')

function handleSearch(query) {
  searchQuery.value = query
}

const visibleSites = computed(() => {
  if (!searchQuery.value) return heritageSites
  const q = searchQuery.value.toLowerCase()
  return heritageSites.filter(
    (site) =>
      site.name.toLowerCase().includes(q) || site.town.toLowerCase().includes(q)
  )
})
</script>

<style scoped>
.search-band {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) 0;
}

.search-band--top {
  padding-top: 96px;
}

.site-list {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) var(--space-7);
}

.site-list__heading {
  margin-bottom: var(--space-5);
}

.site-list__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 600px) {
  .site-list__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .site-list__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.site-list__empty {
  color: var(--color-text-muted);
}

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