import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  receiveUpdates: boolean;
}

interface FormErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpForm = () => {
  const router = useRouter();

  const data = ref<FormData>({
    email: '',
    password: '',
    receiveUpdates: false,
  });

  const errors = ref<FormErrors>({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const isLoading = ref(false);

  const resetErrors = () => {
    errors.value = {
      email: undefined,
      password: undefined,
    };
  };

  const submitToApi = async (formData: Omit<FormData, 'confirmPassword'>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (formData.email === 'test@example.com') {
      throw new Error('This email is already registered');
    }
    return { success: true, message: 'User registered successfully' };
  };

  const handleSubmit = async () => {
    resetErrors();
    let isValid = true;

    if (!data.value.email) {
      errors.value.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.value.email)) {
      errors.value.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!data.value.password) {
      errors.value.password = 'Password is required';
      isValid = false;
    } else if (data.value.password.length < 8) {
      errors.value.password = 'Password must be at least 8 characters long';
      isValid = false;
    } else if (!/[a-zA-Z]/.test(data.value.password) || !/[0-9]/.test(data.value.password)) {
      errors.value.password = 'Password must include both letters and numbers';
      isValid = false;
    }

    if (!data.value.confirmPassword) {
      errors.value.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (data.value.password !== data.value.confirmPassword) {
      errors.value.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!isValid) {
      return false;
    }

    isLoading.value = true;
    try {
      const response = await submitToApi({
        email: data.value.email,
        password: data.value.password,
        receiveUpdates: data.value.receiveUpdates,
      });
      console.log('API response:', response);

      await router.push('/home');
      return true;
    } catch (error: any) {
      errors.value.email = error.message || 'Registration failed. Please try again.';
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, errors, isLoading, handleSubmit };
};
