<template>
  <div id="top">
    <a href="#festivals" class="skip-link">Skip to content</a>

    <HeaderNav solid />

    <section class="page-hero">
      <div class="page-hero__pattern" aria-hidden="true">
        <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMax slice">
          <circle cx="40" cy="130" r="10" fill="var(--color-accent)" opacity="0.5" />
          <circle cx="90" cy="150" r="6" fill="var(--color-accent)" opacity="0.7" />
          <circle cx="150" cy="120" r="8" fill="var(--color-primary-light)" opacity="0.6" />
          <circle cx="220" cy="145" r="12" fill="var(--color-accent)" opacity="0.4" />
          <circle cx="290" cy="125" r="7" fill="var(--color-primary-light)" opacity="0.6" />
          <circle cx="350" cy="150" r="9" fill="var(--color-accent)" opacity="0.5" />
        </svg>
      </div>
      <div class="page-hero__content">
        <p class="page-hero__eyebrow">Traditions &amp; flavors</p>
        <AppText as="h1" variant="display" class="page-hero__title">
          Culture &amp; traditions of Pangasinan
        </AppText>
        <AppText as="p" variant="body" class="page-hero__subtitle">
          Beyond its coastline, Pangasinan carries its own festivals, food, and language —
          shaped by fishing towns, river deltas, and centuries of trade.
        </AppText>
      </div>
    </section>

    <section class="section" id="festivals" aria-labelledby="festivals-heading">
      <div class="section__intro">
        <AppText as="h2" id="festivals-heading" variant="heading-lg">Festivals</AppText>
        <AppText as="p" variant="muted">
          Two of the province's biggest yearly celebrations, both tied to the sea.
        </AppText>
      </div>
      <div class="festival-grid">
               <CultureCard
          v-for="festival in festivals"
          :key="festival.id"
          :title="festival.name"
          :description="festival.description"
          :meta="`${festival.town} \u2014 ${festival.month}`"
          meta-icon="calendar"
          :illustration="festival.illustration"
          :photo="festival.photo"
        />
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="flavors-heading">
      <div class="section__intro">
        <AppText as="h2" id="flavors-heading" variant="heading-lg">Flavors of Pangasinan</AppText>
        <AppText as="p" variant="muted">
          A handful of dishes and delicacies worth seeking out town by town.
        </AppText>
      </div>
      <div class="flavor-grid">
        <CultureCard
          v-for="flavor in flavors"
          :key="flavor.id"
          :title="flavor.name"
          :description="flavor.description"
          :meta="flavor.town"
          meta-icon="pin"
          illustration="food"
          :photo="flavor.photo"
        />
      </div>
    </section>

    <section class="section language-section" aria-labelledby="language-heading">
      <div class="language-section__text">
        <AppText as="h2" id="language-heading" variant="heading-lg">
          The Pangasinan language
        </AppText>
        <AppText as="p" variant="body">{{ languageFacts.description }}</AppText>
      </div>
      <div class="language-section__stat">
        <AppIcon name="pin" size="lg" />
        <div>
          <AppText as="p" variant="heading-lg" class="language-section__stat-number">
            {{ languageFacts.speakerEstimate }}
          </AppText>
          <AppText as="p" variant="muted">Estimated speakers of {{ languageFacts.name }}</AppText>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import HeaderNav from '../components/organisms/HeaderNav.vue'
import SiteFooter from '../components/organisms/SiteFooter.vue'
import CultureCard from '../components/molecules/CultureCard.vue'
import AppText from '../components/atoms/AppText.vue'
import AppIcon from '../components/atoms/AppIcon.vue'
import { festivals, flavors, languageFacts } from '../data/culture.js'
</script>

<style scoped>
.page-hero {
  position: relative;
  background: var(--color-primary-dark);
  color: #fff;
  padding: 140px var(--space-4) var(--space-8);
  overflow: hidden;
}

.page-hero__pattern {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.page-hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--content-max);
  margin: 0 auto;
}

.page-hero__eyebrow {
  margin: 0 0 var(--space-3);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
}

.page-hero__title {
  color: #fff;
  max-width: 20ch;
}

.page-hero__subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 52ch;
  margin-top: var(--space-4);
}

.section {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-7) var(--space-4);
}

.section--tint {
  max-width: none;
  background: var(--color-primary-tint);
}

.section--tint > * {
  max-width: var(--content-max);
  margin-left: auto;
  margin-right: auto;
}

.section__intro {
  margin-bottom: var(--space-6);
  max-width: 46ch;
}

.festival-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 700px) {
  .festival-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.flavor-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 600px) {
  .flavor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.language-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

@media (min-width: 700px) {
  .language-section {
    flex-direction: row;
    align-items: center;
  }
  .language-section__text {
    flex: 2;
  }
}

.language-section__stat {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  color: var(--color-accent-dark);
}

.language-section__stat-number {
  color: var(--color-text);
  margin-bottom: var(--space-1);
}
</style>