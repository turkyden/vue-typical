---
map:
  path: /composition
---

# Composition API

There are some cases of `vue-typical` for you.

## Example

Make a "Hello World" animation with `<v-typical>`

<demo src="./demo.vue"
  language="vue"
  title="Basic Usage"
  desc="Typing a word with animation.">
</demo>

## Properties

| Prop      | Required | Type                                | Eg.                                    |
| --------- | -------- | ----------------------------------- | -------------------------------------- |
| `steps`   | True     | Array<String \| Number \| Function> | `['Hello', 1000, () => alert('Word')]` |
| `loop`    | False    | Number                              | `1` or `'Infinity'`                    |
| `wrapper` | False    | String                              | `'div'`                                |
