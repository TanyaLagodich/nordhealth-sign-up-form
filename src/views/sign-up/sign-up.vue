<template>
  <provet-card padding="l" style="max-width: 400px; margin: var(--n-space-xl) auto">
    <h1 class="n-margin-be-m">Sign up</h1>
    <form class="n-margin-be-m" @submit.prevent="handleSubmit">
      <provet-stack>
        <provet-input
          v-model="data.email"
          label="Email"
          type="email"
          required
          :error="errors.email"
          style="--n-input-inline-size: 100%"
          @input="errors.email = undefined"
        >
          <provet-icon slot="start" name="interface-email" />
        </provet-input>
        <input-password
          v-model="data.password"
          label="Password"
          :error="errors.password"
          @input="errors.password = undefined"
        />

        <provet-checkbox
          v-model="data.receiveUpdates"
          label="I’d like to receive occasional product updates and announcements."
          size="s"
        />

        <provet-banner v-if="formError" shadow variant="danger">
          {{ formError }}
        </provet-banner>
        <provet-button type="submit" expand variant="primary" :loading="isLoading">
          Sign up
        </provet-button>
      </provet-stack>
    </form>
    <p>
      Already have an account?
      <router-link :to="{ name: 'sign-in' }">Login in</router-link>
    </p>
  </provet-card>
</template>

<script setup lang="ts">
import { InputPassword } from '@/components/input-password';
import { useSignUpForm } from '@/composables/use-sign-up-form';

const { data, errors, isLoading, formError, handleSubmit } = useSignUpForm();
</script>
