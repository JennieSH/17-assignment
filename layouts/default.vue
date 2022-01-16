<template>
  <div class="app">
    <Header />
    <div v-if="isLoading" class="load">
      <Loading />
    </div>
    <Nuxt class="container" />
  </div>
</template>

<script>
import { defineComponent, useStore, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Default",
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.todo.isLoading);

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
