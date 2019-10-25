import { type, type as loopedType } from '@camwiegert/typical';

export default {
  name: 'Typical',
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
    },
    className: {
      type: String,
      default: ''
    }
  },
  render: function(createElement) {
    return createElement(
      this.wrapper, 
      {
        class: this.className,
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