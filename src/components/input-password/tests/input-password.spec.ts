import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import InputPassword from '../input-password.vue';
import type { InputPasswordProps } from '../types.ts';

describe('InputPassword', () => {
    const createWrapper = (props: InputPasswordProps & { password: string }) => mount(InputPassword, {
        props,
    });


    const getInputCmp = (w: ReturnType<typeof createWrapper>) => w.findComponent('provet-input');

    describe('rendering', () => {
        it('render cmp with right props', () => {
            const wrapper = createWrapper({
                label: 'Input Password Label',
                password: 'password',
            });

            const input = getInputCmp(wrapper);
            expect(input.attributes('label')).toBe('Input Password Label');
            expect(input.attributes('error')).toBe(undefined);
        });

        it('render cmp with error', () => {
            const wrapper = createWrapper({
                label: 'Input Password Label',
                error: 'Required field',
                password: 'password',
            });

            const input = getInputCmp(wrapper);
            expect(input.attributes('error')).toBe('Required field');
        });

        it('binds v-model password', async () => {
            const wrapper = createWrapper({
                label: 'Password',
                password: '123456',
            });

            const input = getInputCmp(wrapper);

            await input.vm.$emit('update:modelValue', 'new-password');

            expect(wrapper.emitted('update:modelValue')).toBeTruthy();
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new-password']);
        });

        it('toggles visibility on button click', async () => {
            const wrapper = createWrapper({
                label: 'Password',
                password: '123456',
            });

            expect(wrapper.vm.inputType).toBe('password');
            expect(wrapper.find('provet-icon[name="interface-edit-on"]').exists()).toBe(true);

            await wrapper.find('provet-button').trigger('click');

            expect(wrapper.vm.inputType).toBe('text');
            expect(wrapper.find('provet-icon[name="interface-edit-off"]').exists()).toBe(true);
        });
    });
});
