<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useThemeStore } from '@/store/theme';
import { useBreakpoint } from '@/composables/use-display-breakpoint';

const logoSrc = ref<string>('');

const themeStore = useThemeStore();
const { sm } = useBreakpoint();

const loadLogo = async () => {
  const logoModule = themeStore.isDarkTheme
    ? await import('@/assets/logo-light.svg')
    : await import('@/assets/logo-dark.svg');
  logoSrc.value = logoModule.default;
};

const logoSize = computed(() => {
  if (sm.value) {
    return { width: 130, height: 32 };
  }
  return { width: 160, height: 40 };
});

watch(
  () => themeStore.isDarkTheme,
  () => {
    loadLogo();
  },
  { immediate: true }
);
</script>

<template>
  <img
      v-if="logoSrc"
      :src="logoSrc"
      alt="Provet Cloud Logo"
      :width="logoSize.width"
      :height="logoSize.height"
  />
</template>
