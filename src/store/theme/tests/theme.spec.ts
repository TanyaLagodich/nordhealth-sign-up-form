import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useThemeStore } from '../index';
import { THEMES, themeMap } from '../constants';

describe('useThemeStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    describe('non auto themes', () => {
        it('applies each non-auto theme correctly', () => {
            const store = useThemeStore();

            const themes = Object.values(THEMES).filter((theme) => theme !== THEMES.AUTO);

            themes.forEach((theme) => {
                document.head.innerHTML = '';
                store.applyTheme(theme);

                expect(store.currentTheme).toBe(theme);
            });
        });

        it('sets theme and updates <link> + localStorage', () => {
            const store = useThemeStore();
            const themes = Object.values(THEMES).filter((theme) => theme !== THEMES.AUTO);

            themes.forEach((theme) => {
                store.applyTheme(theme);
                const link = document.getElementById('theme-style') as HTMLLinkElement;
                expect(link).toBeTruthy();
                expect(link.href).toContain(themeMap[theme]);
            });
        });
    });

    describe('auto theme', () => {
        it('resolvedTheme returns correct value when system prefers light', () => {
            vi.stubGlobal('matchMedia', vi.fn().mockImplementation(() => ({
                matches: false,
            })));

            const store = useThemeStore();
            store.applyTheme(THEMES.AUTO);

            expect(store.resolvedTheme).toBe(THEMES.LIGHT);
            expect(store.isDarkTheme).toBe(false);
        });

        it('resolvedTheme returns correct value when system prefers dark', () => {
            vi.stubGlobal('matchMedia', vi.fn().mockImplementation(() => ({
                matches: true,
            })));

            const store = useThemeStore();
            store.applyTheme(THEMES.AUTO);

            expect(store.resolvedTheme).toBe(THEMES.DARK);
            expect(store.isDarkTheme).toBe(true);
        });
    });

    describe('local storage', () => {
        it('initTheme applies theme from localStorage', () => {
            localStorage.setItem('theme', THEMES.LIGHT_HIGH_CONTRAST);
            const store = useThemeStore();

            store.initTheme();

            expect(store.currentTheme).toBe(THEMES.LIGHT_HIGH_CONTRAST);

            const link = document.getElementById('theme-style') as HTMLLinkElement;
            expect(link.href).toContain(themeMap[THEMES.LIGHT_HIGH_CONTRAST]);
        });
    })
});
