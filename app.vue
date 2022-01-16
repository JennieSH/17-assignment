<template>
  <div>
    <Header />
    <div v-if="isLoading" class="load">
      <Loading />
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "@/store/todo";
import "virtual:svg-icons-register";

export default defineComponent({
  setup() {
    const store = useTodoStore();
    const isLoading = computed(() => store.isLoading);

    return { isLoading };
  }
});
</script>

<style lang="scss" scoped>
.load {
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lighten(rgba(255, 255, 255, 0.534), 90%);
}
</style>
