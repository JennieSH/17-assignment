<template>
  <main class="container">
    <div class="tab__list">
      <Tab
        v-for="tab in tabList"
        :key="tab"
        class="tab"
        :active="tab === currentTab"
        @click="onSwitchTab(tab)"
        >{{ tab }}
      </Tab>
    </div>
    <Board />
  </main>
</template>

<script>
import { defineComponent, computed, useStore } from "@nuxtjs/composition-api";
import { TaskStatus } from "@/constants/todo";

export default defineComponent({
  setup() {
    const tabList = [TaskStatus.ALL, TaskStatus.IN_PROGRESS, TaskStatus.DONE];
    const store = useStore();
    const currentTab = computed(() => store.state.todo.tab);
    const onSwitchTab = (tabName) => {
      store.commit("todo/switchTab", tabName);
    };

    return { tabList, currentTab, onSwitchTab };
  }
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 55px;
  padding: 16px;

  @include md-width {
    flex-direction: row;
  }
}

.tab {
  margin: 0 2px;

  @include md-width {
    margin: 4px 0;
  }

  &__list {
    position: relative;
    z-index: 2;
    bottom: -1px;
    align-self: flex-start;
    display: flex;
    flex-shrink: 1;
    width: 100%;
    padding: 0 2px;

    @include md-width {
      bottom: 0px;
      right: -1px;
      flex-basis: 120px;
      flex-direction: column;
      align-items: flex-end;
      width: auto;
      padding: 2px 0;
    }
  }
}
</style>
