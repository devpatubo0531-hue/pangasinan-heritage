<template>
  <form class="search-form" role="search" @submit.prevent="onSubmit">
    <label class="search-form__label" for="site-search">
      Search heritage sites
    </label>
    <div class="search-form__row">
      <div class="search-form__field">
        <AppIcon name="search" size="sm" class="search-form__icon" />
        <input
          id="site-search"
          v-model="query"
          type="search"
          class="search-form__input"
          placeholder="Try “Hundred Islands” or “Bolinao”"
          autocomplete="off"
        />
      </div>
      <AppButton type="submit" variant="primary" class="search-form__submit">Search</AppButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AppIcon from '../atoms/AppIcon.vue'
import AppButton from '../atoms/AppButton.vue'

const emit = defineEmits(['search'])
const query = ref('')

function onSubmit() {
  emit('search', query.value.trim())
}
</script>

<style scoped>
.search-form {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
}

.search-form__label {
  display: block;
  font-weight: 600;
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
  color: var(--color-text);
}

.search-form__row {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-3);
}

@media (min-width: 480px) {
  .search-form__row {
    flex-direction: row;
    align-items: stretch;
  }
}

.search-form__field {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.search-form__icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
}

.search-form__input {
  width: 100%;
  min-height: 44px;
  padding: var(--space-2) var(--space-3) var(--space-2) var(--space-7);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-bg);
}

.search-form__input:focus {
  border-color: var(--color-primary);
}

.search-form__submit {
  white-space: nowrap;
}
</style>