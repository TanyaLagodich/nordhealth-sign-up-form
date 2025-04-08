const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const THEMES = {
  LIGHT: 'light',
  LIGHT_HIGH_CONTRAST: 'lightHighContrast',
  DARK: 'dark',
  DARK_HIGH_CONTRAST: 'darkHighContrast',
  AUTO: 'auto',
} as const;

export type ThemeKey = (typeof THEMES)[keyof typeof THEMES];

export const themeMap: Record<Exclude<ThemeKey, 'auto'>, string> = {
  [THEMES.LIGHT]: `${base}/themes/provet.css`,
  [THEMES.LIGHT_HIGH_CONTRAST]: `${base}/themes/provet-high-contrast.css`,
  [THEMES.DARK]: `${base}/themes/provet-dark.css`,
  [THEMES.DARK_HIGH_CONTRAST]: `${base}/themes/provet-dark-high-contrast.css`,
};

export const themeLabels: Record<ThemeKey, string> = {
  [THEMES.LIGHT]: 'Light',
  [THEMES.LIGHT_HIGH_CONTRAST]: 'Light High Contrast',
  [THEMES.DARK]: 'Dark',
  [THEMES.DARK_HIGH_CONTRAST]: 'Dark High Contrast',
  [THEMES.AUTO]: 'Auto',
};
