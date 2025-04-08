<script setup lang="ts">
import { ref, watch } from 'vue';
import { useThemeStore } from '@/store/theme';

const logoSrc = ref<string>('');

const themeStore = useThemeStore();

const loadLogo = async () => {
  const logoModule = themeStore.isDarkTheme
    ? await import('@/assets/logo-light.svg')
    : await import('@/assets/logo-dark.svg');
  logoSrc.value = logoModule.default;
};

watch(
  () => themeStore.isDarkTheme,
  () => {
    loadLogo();
  },
  { immediate: true }
);
</script>

<template>
  <img v-if="logoSrc" :src="logoSrc" alt="Provet Cloud Logo" />
</template>
