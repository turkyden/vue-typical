import { type, type as loopedType } from '@camwiegert/typical';

export default {
  name: 'Typical',
  props: {
    steps: Array,
    wrapper: String,
    loop: Number,
    className: String,
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
    } else if (typeof loop === "number") {
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