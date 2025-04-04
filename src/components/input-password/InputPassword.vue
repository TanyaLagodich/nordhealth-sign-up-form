<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps<{
  label: string;
  error?: string;
}>();

const password = defineModel('password');

const isPasswordVisible = ref<boolean>(false);

const visibilityIcon = computed(() =>
  isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on'
);
const inputType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));
</script>

<template>
  <provet-input
    v-model="password"
    :label="label"
    :type="inputType"
    :required="true"
    :error="error"
    style="--n-input-inline-size: 100%"
  >
    <provet-icon slot="start" name="interface-password" />
    <provet-button slot="end" square @click.prevent="isPasswordVisible = !isPasswordVisible">
      <provet-icon :name="visibilityIcon" />
    </provet-button>
  </provet-input>
</template>
