<template>
  <div class="board">
    <h2 class="board__title">Todo List</h2>

    <!-- Todo List -->
    <div v-if="isEmptyList" class="board__list--initial" @click="onFocusInput">
      <p>Try to add your first task!</p>
      <Icon name="click" size="sm" />
    </div>
    <div v-else-if="isEmptyFilteredList" class="board__list--empty">
      <p>It's empty. ✨</p>
    </div>
    <List
      v-else
      class="board__list"
      :list="todoList"
      @toggle-task="onToggleTask"
      @delete="onDeleteTask"
    />

    <!-- Input Area -->
    <div>
      <Input
        ref="taskInputRef"
        :value.sync="taskText"
        placeholder="請輸入要做的事情"
        @keyup.enter="onAddTask"
      />
      <Button class="board__btn" @click="onAddTask">
        <Icon name="plus" size="sm" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useStore,
  computed
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const taskText = ref("");
    const taskInputRef = ref(null);
    const store = useStore();

    // Computed
    const isLoading = computed(() => store.state.todo.isLoading);
    const todoList = computed(() => store.getters["todo/filteredList"]);
    const isEmptyList = computed(
      () => store.getters["todo/isEmptyList"] && !isLoading.value
    );
    const isEmptyFilteredList = computed(
      () => todoList.value.length === 0 && !isLoading.value
    );

    // Method
    const onToggleTask = (id) => {
      store.dispatch("todo/toggleTask", id);
    };
    const onDeleteTask = (id) => {
      store.dispatch("todo/deleteTask", id);
    };
    const onAddTask = () => {
      if (!taskText.value) return;
      store.dispatch("todo/addTask", taskText.value);
      taskText.value = "";
    };

    const onFocusInput = () => {
      if (!taskInputRef.value) return;
      taskInputRef.value.focus();
    };

    // init data
    store.dispatch("todo/fetchTasks");

    return {
      isLoading,
      taskText,
      taskInputRef,
      todoList,
      isEmptyList,
      isEmptyFilteredList,
      onToggleTask,
      onDeleteTask,
      onAddTask,
      onFocusInput
    };
  }
});
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 700px;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: $rounded;
  background-color: var(--secondary);
  position: relative;

  @include md-width {
    width: 70%;
  }

  > div {
    display: flex;
  }

  &__title {
    margin: 20px;
    font-size: $text-md;
    font-weight: $bold;

    @include md-width {
      margin-left: 25px;
      font-size: $text-lg;
    }
  }

  &__list {
    flex-grow: 1;
  }

  &__list--initial {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: var(--active);
    }

    > svg {
      margin-left: 8px;
      animation: jump 1.5s alternate infinite;
    }
  }

  &__list--empty {
    color: var(--border);
    margin: 0 auto;
  }

  &__btn {
    margin-left: 12px;

    @include md-width {
      margin-left: 25px;
    }
  }
}
</style>
