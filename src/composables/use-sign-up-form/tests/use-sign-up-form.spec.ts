import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSignUpForm } from '../index.ts';

const pushSpy = vi.fn();

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push: pushSpy,
    }),
}));

describe('useSignUpForm', () => {
    let form: ReturnType<typeof useSignUpForm>;

    beforeEach(() => {
        pushSpy.mockClear();

        form = useSignUpForm();
        form.data.value = {
            email: '',
            password: '',
            receiveUpdates: false,
        };
    });

    it('returns error when email and password are empty', async () => {
        await form.handleSubmit();

        expect(form.errors.value.email).toBe('Email is required');
        expect(form.errors.value.password).toBe('Password is required');
        expect(form.formError.value).toBe(null);
    });

    it('returns error for invalid email format', async () => {
        form.data.value.email = 'invalid-email';
        form.data.value.password = '123456';

        await form.handleSubmit();

        expect(form.errors.value.email).toBe('Please enter a valid email address');
        expect(form.errors.value.password).toBeUndefined();
    });

    it('sets formError if email is already registered', async () => {
        form.data.value.email = 'test@example.com';
        form.data.value.password = '123456';

        await form.handleSubmit();
        expect(form.formError.value).toBe('This email is already registered');
    });

    it('submits and redirects on valid data', async () => {
        form.data.value.email = 'valid@example.com';
        form.data.value.password = '123456';
        form.data.value.receiveUpdates = true;

        await form.handleSubmit();

        expect(pushSpy).toHaveBeenCalledWith('/home');
        expect(form.formError.value).toBe(null);
    });

    it('sets isLoading correctly during submission', async () => {
        form.data.value.email = 'valid@example.com';
        form.data.value.password = '123456';

        const promise = form.handleSubmit();
        expect(form.isLoading.value).toBe(true);

        await promise;
        expect(form.isLoading.value).toBe(false);
    });
});
