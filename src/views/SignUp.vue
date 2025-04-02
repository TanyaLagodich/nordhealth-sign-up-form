<template>
  <provet-card padding="l" style="max-width: 400px; margin: var(--n-space-xl) auto">
    <h1>Sign up</h1>
    <form @submit.prevent="handleSubmit">
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
        <InputPassword v-model="data.password" label="Password" :error="errors.password" />

        <provet-checkbox
          label="I’d like to receive occasional product updates and announcements."
          size="s"
          value="false"
        />

        <provet-button type="submit" expand variant="primary">Sign up</provet-button>
      </provet-stack>
    </form>
    <p>
      Already have an account?
      <routerLink :to="{ name: 'sign-in' }">Login in</routerLink>
    </p>
  </provet-card>
</template>

<script setup lang="ts">
import { InputPassword } from '@/components/input-password';
import { useSignUpForm } from '@/composables/sign-up-form';

const { data, errors, isLoading, handleSubmit } = useSignUpForm();
</script>
