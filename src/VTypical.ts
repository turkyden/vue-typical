import { h, onMounted, ref, defineComponent } from 'vue';
import typing from './typing';

const loopedTyping = typing;

export default defineComponent({
  name: 'Typical',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    wrapper: {
      type: String,
      default: 'div',
    },
    loop: {
      type: Number,
      default: 1,
    },
  },
  render() {
    return h(this.wrapper, {
      ref: 'myRef',
    });
  },
  setup: ({ steps, loop }) => {
    const myRef = ref(null);

    onMounted(() => {
      const dom = myRef.value;
      if (loop === Infinity) {
        typing(dom, ...steps, loopedTyping);
      } else if (typeof loop === 'number' && loop > 0) {
        typing(dom, ...Array(loop).fill(steps).flat());
      } else {
        typing(dom, ...steps);
      }
    });

    return {
      myRef,
    };
  },
});
