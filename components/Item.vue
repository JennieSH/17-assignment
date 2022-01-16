<template>
  <li class="task">
    <Checkbox :active="task.done" @click="$emit('toggle-task', task.id)" />
    <Input
      v-if="isInputShow"
      v-model.trim="inputText"
      v-focus
      class="task__input"
      @blur="onBlur(task.id)"
      @keyup.esc="onCancelEdit"
      @keyup.enter="onSubmit(task.id)"
    />
    <p v-else class="task__content" @dblclick="onEdit">
      {{ task.content }}
    </p>

    <Icon name="bin" class="task__bin" @click="$emit('delete', task.id)" />
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Task } from "@/type/todo";
import { useTodoStore } from "@/store/todo";

const focus = {
  mounted(el: HTMLElement) {
    el.focus();
  }
};

export default defineComponent({
  directives: {
    focus
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      default: () => null
    }
  },
  setup(props) {
    const store = useTodoStore();
    const inputText = ref(props.task.content);
    const isEditing = ref(false);
    const isInputShow = ref(false);
    const taskContent = computed(() => props.task.content);

    const onEdit = () => {
      isEditing.value = true;
      isInputShow.value = true;
    };

    const onSubmit = async (id: number) => {
      if (!inputText.value) return;
      if (inputText.value !== taskContent.value) {
        isEditing.value = false;
        await store.editTask(id, inputText.value);
      }

      isInputShow.value = false;
    };

    // enter 送出後，也會觸發 blur，指定 isEditing 為 true 才打 api
    const onBlur = (id: number) => {
      if (!isEditing.value) return;
      onSubmit(id);
    };

    const onCancelEdit = () => {
      isEditing.value = false;
      isEditing.value = false;
    };

    return {
      inputText,
      isEditing,
      isInputShow,
      onBlur,
      onEdit,
      onSubmit,
      onCancelEdit
    };
  }
});
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-top: 46px;

  &:first-child {
    margin-top: 0;
  }

  @include lg-width {
    padding: 0 40px;
  }

  &__content {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    text-align: start;
    margin: 0 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    @include md-width {
      font-size: $text-basic;
    }
  }

  &__input {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    margin: 0 32px;
  }

  &__bin {
    color: var(--border);
    &:hover {
      color: $red;
    }
  }
}
</style>
