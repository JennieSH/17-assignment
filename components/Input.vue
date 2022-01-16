<template>
  <input ref="inputRef" type="text" :value="modelValue" @input="onInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(_, { emit }) {
    const inputRef = ref<HTMLElement | null>(null);
    const onInput = (e: Event) => {
      emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    const focus = () => {
      if (!inputRef.value) return;
      inputRef.value.focus();
    };

    return {
      inputRef,
      onInput,
      focus
    };
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
