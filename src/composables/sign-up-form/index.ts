import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface FormData {
  email: string;
  password: string;
  receiveUpdates: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
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
  });

  const formError = ref<string | null>(null);

  const isLoading = ref(false);

  const resetErrors = () => {
    errors.value = {
      email: undefined,
      password: undefined,
    };

    formError.value = null;
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
    }

    if (!isValid) {
      return false;
    }

    isLoading.value = true;
    try {
      await submitToApi({
        email: data.value.email,
        password: data.value.password,
        receiveUpdates: data.value.receiveUpdates,
      });

      await router.push('/home');
      return true;
    } catch (error: any) {
      formError.value = error.message || 'Registration failed. Please try again.';
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, errors, isLoading, formError, handleSubmit };
};
