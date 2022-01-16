<template>
  <input
    ref="inputRef"
    type="text"
    :value="value"
    v-on="$listeners"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(_, { emit }) {
    const inputRef = ref(null);
    const onInput = (e) => {
      emit("update:value", e.target.value);
    };

    const focus = () => {
      if (!inputRef.value) return;
      inputRef.value.focus();
    };

    return { inputRef, onInput, focus };
  }
});
</script>

<style lang="scss" scoped>
input[type="text"] {
  width: 100%;
  border: 1px solid var(--border);
  outline: none;
  padding: 9px 14px;
  border-radius: $rounded;

  &:focus {
    border-color: var(--active);
  }
}
</style>
