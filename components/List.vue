<template>
  <ul class="list">
    <Item
      v-for="task in list"
      :key="task.id"
      :task="task"
      @toggle-task="$emit('toggle-task', task.id)"
      @delete="$emit('delete', task.id)"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
.list {
  padding: 10px 10px 20px 10px;

  @include md-width {
    padding: 20px 40px;
  }
}
</style>
