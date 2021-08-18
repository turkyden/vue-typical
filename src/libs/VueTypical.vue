<script lang="ts">
import { h, defineComponent, onMounted, toRefs } from 'vue'
import type from './type'

const loopedType = type;

export default defineComponent({
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
  render(createElement: any) {
    return h(
      this.wrapper, 
      {
        ref: 'myRef'
      }
    )
  },
  setup: (props, context) => {
    onMounted(() => {
      console.log(context)
      const { steps, loop } = props;
      if (loop === Infinity) {
        type(context.$refs.myRef, ...steps, loopedType);
      } else if (typeof loop === "number" && loop > 0) {
        type(
          context.$refs.myRef,
          ...Array(loop)
            .fill(steps)
            .flat()
        );
      } else {
        type(context.$refs.myRef, ...steps);
      }
    })
    
  }
})

</script>