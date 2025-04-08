<script setup lang="ts">
import { Header } from '@/components/header';
</script>

<template>
  <provet-layout class="n-reset">
    <Header slot="header" />
    <router-view />
  </provet-layout>
</template>
