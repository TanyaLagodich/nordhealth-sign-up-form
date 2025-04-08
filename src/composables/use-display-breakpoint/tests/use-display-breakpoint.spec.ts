import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import { useBreakpoint } from '../index';
import { nextTick } from 'vue';

function setInnerWidth(width: number) {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });

    window.dispatchEvent(new Event('resize'));
}

function triggerResize(width: number) {
    setInnerWidth(width);
}

describe.skip('useBreakpoint', () => {

    const { sm, md, lg, width } = useBreakpoint();

    it('sets correct flags for small screen (<=480)', async () => {
        triggerResize(420);
        await nextTick();
        expect(width.value).toBe(420);
        expect(sm.value).toBe(true);
        expect(md.value).toBe(true);
        expect(lg.value).toBe(true);
    });

    it.skip('sets correct flags for medium screen (<=768)', async () => {
        triggerResize(600);
        const { sm, md, lg, width } = useBreakpoint();
        await nextTick();

        expect(width.value).toBe(600);
        expect(sm.value).toBe(false);
        expect(md.value).toBe(true);
        expect(lg.value).toBe(true);
    });

    it.skip('sets correct flags for large screen (<=1024)', async () => {
        triggerResize(1000);
        const { sm, md, lg, width, update } = useBreakpoint();
        update();

        expect(width.value).toBe(1000);
        expect(sm.value).toBe(false);
        expect(md.value).toBe(false);
        expect(lg.value).toBe(true);
    });

    it.skip('sets correct flags for extra large screen (>1024)', async () => {
        triggerResize(1300);
        const { sm, md, lg, width,  update } = useBreakpoint();
        await nextTick();
        update();

        expect(width.value).toBe(1300);
        expect(sm.value).toBe(false);
        expect(md.value).toBe(false);
        expect(lg.value).toBe(false);
    });
});
