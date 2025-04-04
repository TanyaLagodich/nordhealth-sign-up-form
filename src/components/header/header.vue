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
    <provet-button slot="toggle">Change theme</provet-button>
    <provet-dropdown-item
      v-for="theme in THEMES"
      :key="theme"
      @click="() => applyTheme(theme)"
    >
      {{ themeLabels[theme] }}
    </provet-dropdown-item>
  </provet-dropdown>
</provet-header>
</template>
