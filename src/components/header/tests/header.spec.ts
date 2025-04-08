import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { describe, vi, it, expect, beforeEach } from 'vitest';
import Header from '../header.vue';
import { themeLabels, THEMES, type ThemeKey } from '@/store/theme/constants.ts';
import { useThemeStore } from '@/store/theme';

describe('Header', () => {
  const createWrapper = (initialTheme: ThemeKey = THEMES.LIGHT) =>
    mount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              theme: { currentTheme: initialTheme },
            },
          }),
        ],
      },
    });

  let wrapper: ReturnType<typeof createWrapper>
  describe('rendering', () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });
    it('renders Logo component', () => {
      expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true);
    });

    it('renders the dropdown button', () => {
      const toggle = wrapper.find('provet-button[slot="toggle"]');
      expect(toggle.exists()).toBe(true);
      expect(toggle.text()).toContain('Change theme');
    });

    it('renders all theme options in dropdown', () => {
      const items = wrapper.findAll('[role="menuitemradio"]');
      expect(items.length).toBe(Object.values(THEMES).length);
      Object.values(THEMES).forEach((theme) => {
        expect(wrapper.text()).toContain(themeLabels[theme]);
      });
    });
  });

  describe('changing themes', () => {
    it('calls applyTheme with correct theme on click', async () => {
      const themeStore = useThemeStore();
      const item = wrapper
        .findAll('[role="menuitemradio"]')
        .find((el) => el.text().includes(themeLabels.dark));

      expect(item).toBeTruthy();
      await item!.trigger('click');

      expect(themeStore.applyTheme).toHaveBeenCalledWith('dark');
    });

    it('applies active classes to the current theme', () => {
      const wrapper = createWrapper(THEMES.DARK);

      const item = wrapper
        .findAll('[role="menuitemradio"]')
        .find((el) => el.text().includes(themeLabels.dark));

      expect(item?.classes()).toContain('n-color-accent');
      expect(item?.find('span').classes()).toContain('n-color-text-on-accent');
    });
  });
});
