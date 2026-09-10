<!--
  PAGE: Heritage Site Detail
  Route: /heritage-sites/[id] — dynamic page, one per entry in
  data/heritageSites.js. Reached by clicking "Explore" on any HeritageCard.

  Shows: a full-bleed hero (photo + name + town + rating), a row of
  practical visit-planning facts (Best Time to Visit, How to Get There,
  Entrance Fee), the full write-up, and a small photo gallery — everything
  a visitor would want before deciding to go, beyond the one-line card
  description used on the listing screens.
-->
<template>
  <div v-if="site">
    <a href="#details" class="skip-link">Skip to details</a>

    <HeaderNav />

    <section class="detail-hero" aria-labelledby="detail-hero-heading">
      <img
        class="detail-hero__photo"
        :src="site.photo"
        :alt="site.name"
        fetchpriority="high"
        decoding="async"
      />
      <div class="detail-hero__scrim" aria-hidden="true" />

      <div class="detail-hero__content">
        <NuxtLink to="/heritage-sites" class="detail-hero__back">
          <AppIcon name="arrow-right" size="sm" class="detail-hero__back-icon" />
          Back to Destinations
        </NuxtLink>

        <p class="detail-hero__town">
          <AppIcon name="pin" size="sm" />
          {{ site.town }}
        </p>
        <AppText as="h1" id="detail-hero-heading" variant="display" class="detail-hero__title">
          {{ site.name }}
        </AppText>
        <p v-if="site.rating" class="detail-hero__rating">
          ★ {{ site.rating }} <span>({{ site.reviewCount }} reviews)</span>
        </p>
      </div>
    </section>

    <section id="details" class="detail-facts">
      <div class="detail-facts__grid">
        <div class="fact-card">
          <AppIcon name="calendar" size="lg" />
          <div>
            <AppText as="h2" variant="heading-md">Best Time to Visit</AppText>
            <AppText as="p" variant="body-sm" class="fact-card__text">
              {{ site.bestTime }}
            </AppText>
          </div>
        </div>

        <div class="fact-card">
          <AppIcon name="route" size="lg" />
          <div>
            <AppText as="h2" variant="heading-md">How to Get There</AppText>
            <AppText as="p" variant="body-sm" class="fact-card__text">
              {{ site.howToGetThere }}
            </AppText>
          </div>
        </div>

        <div class="fact-card">
          <AppIcon name="ticket" size="lg" />
          <div>
            <AppText as="h2" variant="heading-md">Entrance Fee</AppText>
            <AppText as="p" variant="body-sm" class="fact-card__text">
              {{ site.entranceFee }}
            </AppText>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-about">
      <AppText as="h2" variant="heading-lg">About {{ site.name }}</AppText>
      <AppText as="p" variant="body" class="detail-about__text">
        {{ site.fullDescription }}
      </AppText>
    </section>

    <section v-if="site.gallery && site.gallery.length" class="detail-gallery">
      <AppText as="h2" variant="heading-lg" class="detail-gallery__heading">Gallery</AppText>
      <div class="detail-gallery__grid">
        <AppImage
          v-for="(image, i) in site.gallery"
          :key="i"
          :src="image.url"
          :alt="`${site.name} — photo ${i + 1}`"
          ratio="4 / 3"
        >
          <SiteIllustration :name="site.illustration" />
        </AppImage>
      </div>
    </section>

    <SiteFooter :credits="(site.gallery || []).map((g) => g.credit)" />
  </div>

  <div v-else class="not-found">
    <HeaderNav solid />
    <div class="not-found__content">
      <AppText as="h1" variant="heading-lg">Site not found</AppText>
      <AppText as="p" variant="body">
        We couldn't find a heritage site matching that link.
      </AppText>
      <NuxtLink to="/heritage-sites" class="not-found__link">
        Back to Destinations
        <AppIcon name="arrow-right" size="sm" />
      </NuxtLink>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { heritageSites } from '../../data/heritageSites.js'
import HeaderNav from '../../components/organisms/HeaderNav.vue'
import SiteFooter from '../../components/organisms/SiteFooter.vue'
import AppImage from '../../components/atoms/AppImage.vue'
import SiteIllustration from '../../components/atoms/SiteIllustration.vue'
import AppText from '../../components/atoms/AppText.vue'
import AppIcon from '../../components/atoms/AppIcon.vue'

const route = useRoute()
const site = computed(() => heritageSites.find((s) => s.id === route.params.id))
</script>

<style scoped>
.detail-hero {
  position: relative;
  min-height: 420px;
  height: 60vh;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 96px var(--space-4) var(--space-7);
  color: #fff;
}

.detail-hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 20, 20, 0.85) 0%,
    rgba(5, 20, 20, 0.35) 55%,
    rgba(5, 20, 20, 0.15) 100%
  );
}

.detail-hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--content-max);
  width: 100%;
  margin: 0 auto;
}

.detail-hero__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: #fff;
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--space-5);
  opacity: 0.9;
}

.detail-hero__back:hover {
  opacity: 1;
}

.detail-hero__back-icon {
  transform: rotate(180deg);
}

.detail-hero__town {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0 0 var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
}

.detail-hero__title {
  color: #fff;
  max-width: 24ch;
}

.detail-hero__rating {
  margin: var(--space-3) 0 0;
  color: var(--color-accent);
  font-weight: 600;
}

.detail-hero__rating span {
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
}

.detail-facts {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) 0;
}

.detail-facts__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 700px) {
  .detail-facts__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.fact-card {
  display: flex;
  gap: var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  color: var(--color-accent-dark);
}

.fact-card__text {
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}

.detail-about {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-7) var(--space-4);
}

.detail-about__text {
  color: var(--color-text-muted);
  max-width: 68ch;
  margin-top: var(--space-3);
}

.detail-gallery {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--space-4) var(--space-7);
}

.detail-gallery__heading {
  margin-bottom: var(--space-4);
}

.detail-gallery__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 600px) {
  .detail-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
}

.not-found__content {
  flex: 1;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 160px var(--space-4) var(--space-7);
  text-align: center;
}

.not-found__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-4);
  font-weight: 600;
  color: var(--color-primary-dark);
  text-decoration: none;
}
</style>