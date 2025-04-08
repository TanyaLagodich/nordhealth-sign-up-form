import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoint() {
  const width = ref(window.innerWidth);
  const sm = ref(false);
  const md = ref(false);
  const lg = ref(false);

  const update = () => {
    console.log('update', window.innerWidth, window.innerWidth);
    width.value = window.innerWidth;
    sm.value = width.value <= 480;
    md.value = width.value <= 768;
    lg.value = width.value <= 1024;
  };

  onMounted(() => {
    update();
    window.addEventListener('resize', update);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', update);
  });

  return {
    width,
    sm,
    md,
    lg,
    update,
  };
}
