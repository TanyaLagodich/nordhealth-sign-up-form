import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { Logo } from '@/components/logo';
import { useThemeStore } from '@/store/theme';
import {THEMES} from "@/store/theme/constants.ts";

vi.mock('@/assets/logo-light.svg', () => ({
    default: '/mocked/logo-light.svg',
}));
vi.mock('@/assets/logo-dark.svg', () => ({
    default: '/mocked/logo-dark.svg',
}));

describe('Logo', () => {

    const createWrapper = () => mount(Logo, {
        global: {
            plugins: [createPinia()],
        },
    });

    let wrapper: ReturnType<typeof createWrapper>;
    let themeStore: ReturnType<typeof useThemeStore>;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = createWrapper();
        themeStore = useThemeStore();
    });

    describe('rendering light logo with Dark theme', () => {
        it('renders logo with dark theme', async () => {
            themeStore.applyTheme(THEMES.DARK);

            await flushPromises();

            const img = wrapper.find('img');
            expect(img.exists()).toBe(true);
            expect(img.attributes('src')).toBe('/mocked/logo-light.svg');
        });

        it('renders logo with darkHighContrast theme', async () => {
            themeStore.applyTheme(THEMES.DARK_HIGH_CONTRAST);

            await flushPromises();

            const img = wrapper.find('img');
            expect(img.exists()).toBe(true);
            expect(img.attributes('src')).toBe('/mocked/logo-light.svg');
        });
    });

    describe('rendering dark logo with light theme', () => {
        it('renders logo with light theme', async () => {
            themeStore.applyTheme(THEMES.LIGHT);

            await flushPromises();

            const img = wrapper.find('img');
            expect(img.exists()).toBe(true);
            expect(img.attributes('src')).toBe('/mocked/logo-dark.svg');
        });

        it('renders logo with lightHighContrast theme', async () => {
            themeStore.applyTheme(THEMES.LIGHT_HIGH_CONTRAST);

            await flushPromises();

            const img = wrapper.find('img');
            expect(img.exists()).toBe(true);
            expect(img.attributes('src')).toBe('/mocked/logo-dark.svg');
        });
    });
});
