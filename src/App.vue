<template>
  <provet-layout padding="none">
    <template v-slot:top-bar>
      <provet-top-bar>
        <img src="/public/logo.svg" alt="logo" />
      </provet-top-bar>
    </template>
    <RouterView />
  </provet-layout>
</template>

<style lang="scss">
#app {
  padding: 0;
  width: 100%;
}
</style>
<script setup lang="ts"></script>
