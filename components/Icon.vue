<template>
  <svg
    class="icon"
    :class="`icon--${size}`"
    fill="currentColor"
    aria-hidden="true"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type IconSize = "sm" | "md" | "lg";

export default defineComponent({
  name: "Icon",
  props: {
    className: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String as PropType<IconSize>,
      default: "md"
    }
  }
});
</script>

<style lang="scss">
.icon {
  cursor: pointer;
  &--sm {
    height: 21px;
    width: 21px;
  }

  &--md {
    height: 24px;
    width: 24px;
  }

  &--lg {
    height: 32px;
    width: 32px;
  }
}
</style>
