<template>
  <Icon
    :name="active ? 'checkbox-active' : 'checkbox'"
    class="checkbox"
    :class="{
      'checkbox--active': active
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.checkbox {
  color: var(--border);

  &--active {
    color: var(--active);
  }
}
</style>
