<template>
  <SvgIcon
    class="icon"
    :class="`icon--${size}`"
    :name="name"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

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
      type: String,
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
