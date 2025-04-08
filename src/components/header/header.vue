<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
import { themeLabels, THEMES } from '@/store/theme/constants';
import { Logo } from '@/components/logo';

const themeStore = useThemeStore();
const { applyTheme } = themeStore;
</script>

<template>
  <provet-header slot="header">
    <Logo />

    <provet-dropdown slot="end" size="s">
      <provet-button slot="toggle" aria-haspopup="true" size="m"> Change theme </provet-button>
      <provet-dropdown-item
        v-for="theme in THEMES"
        :key="theme"
        :aria-pressed="theme === themeStore.currentTheme"
        role="menuitemradio"
        :class="{ 'n-color-accent': theme === themeStore.currentTheme }"
        @click="applyTheme(theme)"
      >
        <span :class="{ 'n-color-text-on-accent': theme === themeStore.currentTheme }">
          {{ themeLabels[theme] }}
        </span>
      </provet-dropdown-item>
    </provet-dropdown>
  </provet-header>
</template>
