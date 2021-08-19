<script lang="ts">
import { h, onMounted, ref } from 'vue'
import type from './type'

const loopedType = type;

export default {
  name: 'VueTypical',
  props: {
    steps: {
      type: Array,
      required: true
    },
    wrapper: {
      type: String,
      default: 'div'
    },
    loop: {
      type: Number,
      default: 1
    }
  },
  render() {
    return h(
      this.wrapper, 
      {
        ref: 'myRef'
      }
    )
  },
  setup: (props, context) => {
    const myRef = ref(null);

    onMounted(() => {
      const { steps, loop } = props;
      const dom = myRef.value;
      if (loop === Infinity) {
        type(dom, ...steps, loopedType);
      } else if (typeof loop === "number" && loop > 0) {
        type(
          dom,
          ...Array(loop)
            .fill(steps)
            .flat()
        );
      } else {
        type(dom, ...steps);
      }
    })
    
    return {
      myRef
    }
  }
}
</script>