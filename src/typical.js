export async function type(node, ...args) {
  for (const arg of args) {
      switch (typeof arg) {
          case 'string':
              await edit(node, arg);
              break;
          case 'number':
              await wait(arg);
              break;
          case 'function':
              await arg(node, ...args);
              break;
          default:
              await arg;
      }
  }
}

async function edit(node, text) {
  const overlap = getOverlap(node.textContent, text);
  await perform(node, [...deleter(node.textContent, overlap), ...writer(text, overlap)]);
}

async function wait(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node, edits, speed = 60) {
  for (const op of editor(edits)) {
      op(node);
      await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(edits) {
  for (const edit of edits) {
      yield (node) => requestAnimationFrame(() => node.textContent = edit);
  }
}

export function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
      yield text.slice(0, ++startIndex).join('');
  }
}

export function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
      yield text.slice(0, --endIndex).join('');
  }
}

export function getOverlap(start, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}

const loopedType = type;

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
        ref: 'myRef'
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