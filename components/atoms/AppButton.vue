<!--
  ATOM: Button
  Usage: any single user action — primary calls to action ("Plan your visit"),
  secondary actions (filters, "View map"), or as a submit control inside forms.
  Do not use for navigation between major sections; use NavItem for that.
-->
<template>
  <component
    :is="tag"
    class="app-button"
    :class="[`app-button--${variant}`, `app-button--${size}`]"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
  >
    <span class="app-button__label"><slot /></span>
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'secondary' | 'ghost'
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md'
    validator: (v) => ['sm', 'md'].includes(v)
  },
  tag: {
    type: String,
    default: 'button' // 'button' | 'a'
  },
  type: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: undefined
  }
})
</script>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--ease-standard),
    color var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);
  /* Minimum 44px touch target for mobile accessibility */
  min-height: 44px;
}

.app-button--md {
  padding: var(--space-3) var(--space-5);
  font-size: var(--text-base);
}

.app-button--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  min-height: 40px;
}

.app-button--primary {
  background: var(--color-accent);
  color: var(--color-primary-dark);
}
.app-button--primary:hover {
  background: var(--color-accent-dark);
  color: #fff;
}

.app-button--secondary {
  background: var(--color-primary);
  color: #fff;
}
.app-button--secondary:hover {
  background: var(--color-primary-dark);
}

.app-button--ghost {
  background: transparent;
  border-color: var(--color-surface);
  color: var(--color-surface);
}
.app-button--ghost:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>
