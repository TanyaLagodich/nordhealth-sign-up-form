import { describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import SignUp from '../sign-up.vue';

const mockData = ref({ email: '', password: '', receiveUpdates: false });
const mockErrors = ref({ email: '', password: '' });
const mockFormError = ref<string | null>(null);
const mockLoading = ref<boolean>(false);

vi.mock('@/composables/use-sign-up-form', () => ({
  useSignUpForm: () => ({
    data: mockData,
    errors: mockErrors,
    formError: mockFormError,
    isLoading: mockLoading,
  }),
}));

describe('SignUp page', () => {
  const createWrapper = () => mount(SignUp);

  describe('rendering', () => {
    it('renders the form with required inputs', () => {
      const wrapper = createWrapper();

      expect(wrapper.text()).toContain('Sign up');
      expect(wrapper.find('provet-input[label="Email"]').exists()).toBe(true);
      expect(wrapper.findComponent({ name: 'InputPassword' }).exists()).toBe(true);
      expect(wrapper.find('provet-button[type="submit"]').exists()).toBe(true);
    });

    it('shows validation errors if fields are empty', async () => {
      mockErrors.value.email = 'Email is required';
      mockErrors.value.password = 'Password is required';
      const wrapper = createWrapper();

      const emailInput = wrapper.find('provet-input[label="Email"]');
      expect(emailInput.exists()).toBe(true);
      expect(emailInput.attributes('error')).toBe('Email is required');

      const passwordInput = wrapper.find('provet-input[label="Password"]');
      expect(passwordInput.exists()).toBe(true);
      expect(passwordInput.attributes('error')).toBe('Password is required');
    });

    it('show error from server', () => {
      mockFormError.value = 'There is an error from the server...';
      const wrapper = createWrapper();

      const errorBanner = wrapper.find('provet-banner');
      expect(errorBanner.exists()).toBe(true);
      expect(errorBanner.text()).toBe('There is an error from the server...');
    });

    it('show loading on the button', () => {
      mockLoading.value = true;
      const wrapper = createWrapper();

      const submitButton = wrapper.find('provet-button[type="submit"]');
      expect(submitButton.attributes('loading')).toBe('true');
    });
  });
});
