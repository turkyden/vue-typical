import { type, type as loopedType } from '@camwiegert/typical';

export default {
  name: 'vue-typical',
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
  render: function(createElement) {
    return createElement(
      this.wrapper, 
      {
        ref: 'myRef',
      }
    )
  },
  mounted: function () {
    const { steps, loop } = this;
    if (loop === Infinity) {
      type(this.$refs.myRef, ...steps, loopedType);
    } else if (typeof loop === "number" && loop > 0) {
      type(
        this.$refs.myRef,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(this.$refs.myRef, ...steps);
    }
  }
}