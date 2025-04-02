import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { themeMap, type ThemeKey, THEMES } from './constants';

export const useThemeStore = defineStore('theme', () => {
    const currentTheme = ref<ThemeKey>('light');

    const updateThemeLink = (href: string, linkId = 'theme-style') => {
        let link = document.getElementById(linkId) as HTMLLinkElement | null;

        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.id = linkId;
            document.head.appendChild(link);
        }

        link.href = href;
    };

    const getPreferredTheme = (): Exclude<ThemeKey, 'auto'> => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const resolvedTheme = computed(() => {
        if (currentTheme.value === 'auto') {
            return getPreferredTheme();
        }
        return currentTheme.value;
    });

    const isDarkTheme = computed(() => {
        return [THEMES.DARK, THEMES.DARK_HIGH_CONTRAST].includes(resolvedTheme.value);
    });

    function applyTheme(theme: ThemeKey) {
        const href =
            theme === 'auto' ? themeMap[getPreferredTheme()] : themeMap[theme];

        if (href) {
            updateThemeLink(href);
            currentTheme.value = theme;
            localStorage.setItem('theme', theme);
        }
    }

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme') as ThemeKey | null;
        if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
            applyTheme(savedTheme);
        } else {
            applyTheme(THEMES.AUTO);
        }
    };

    return {
        currentTheme,
        resolvedTheme,
        isDarkTheme,
        applyTheme,
        initTheme,
    };
});
