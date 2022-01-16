<template>
  <div
    class="tab"
    :class="{
      'tab--active': active
    }"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

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
.tab {
  width: 100%;
  padding: 4px 8px;
  border: 1px dashed var(--border);
  border-top-right-radius: $rounded;
  border-top-left-radius: $rounded;
  border-bottom-style: solid;
  color: lighten($gray, 15%);
  cursor: pointer;
  text-align: center;
  background-color: lighten($gray, 35%);

  @include md-width {
    padding: 8px 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: $rounded;
    border-bottom-style: dashed;
    border-right-style: solid;
  }

  &.tab--active,
  &:hover {
    color: $gray;
    font-weight: $bold;
    border: 1px solid var(--border);
    border-bottom-color: var(--secondary);
    background-color: var(--secondary);

    @include md-width {
      border-bottom-color: var(--border);
      border-right-color: var(--secondary);
    }
  }
}
</style>
