<script setup lang="ts">
import { Header } from '@/components/header';
</script>

<template>
  <provet-layout class="n-reset">
    <Header />
    <RouterView />
  </provet-layout>
</template>

<style lang="scss">
#app {
  padding: 0;
  width: 100%;
}
</style>
