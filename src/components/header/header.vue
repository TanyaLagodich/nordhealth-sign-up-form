<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store/theme';
import { themeLabels, THEMES } from '@/store/theme/constants';
import { Logo } from '@/components/logo';
import { useBreakpoint } from '@/composables/use-display-breakpoint';

const themeStore = useThemeStore();
const { applyTheme } = themeStore;

const { sm } = useBreakpoint();
const dropdownSize = computed(() => (sm.value ? 's' : 'm'));
</script>

<template>
  <provet-header slot="header">
    <Logo />
    <provet-dropdown slot="end" :size="dropdownSize">
      <provet-button slot="toggle" aria-haspopup="true" :size="dropdownSize">
        Change theme
      </provet-button>
      <provet-dropdown-item
        v-for="theme in THEMES"
        :key="theme"
        :aria-pressed="theme === themeStore.currentTheme"
        role="menuitemradio"
        :class="{ active: theme === themeStore.currentTheme }"
        @click="applyTheme(theme)"
      >
        {{ themeLabels[theme] }}
      </provet-dropdown-item>
    </provet-dropdown>
  </provet-header>
</template>

<style>
provet-dropdown-item:not(.active):hover {
  --n-dropdown-item-background-color: var(--n-color-active);
  --n-dropdown-item-color: var(--n-color-text);
}

provet-dropdown-item.active {
  --n-dropdown-item-background-color: var(--n-color-accent);
  --n-dropdown-item-color: var(--n-color-text-on-accent);
}
</style>
