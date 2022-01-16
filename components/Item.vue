<template>
  <li class="task">
    <Checkbox :active="task.done" @click="$emit('toggle-task', task.id)" />
    <Input
      v-if="isInputShow"
      v-focus
      :value.sync="taskText"
      class="task__input"
      @blur="onBlur(task.id)"
      @keyup.enter="onSubmit(task.id)"
    />
    <p v-else class="task__content" @dblclick="onEdit">
      {{ task.content }}
    </p>

    <Icon name="bin" class="task__bin" @click="$emit('delete', task.id)" />
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  useStore
} from "@nuxtjs/composition-api";

export default defineComponent({
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  props: {
    task: {
      type: Object,
      default: () => null
    }
  },
  setup(props) {
    const store = useStore();
    const taskText = ref(props.task.content);
    const isEditing = ref(false);
    const isInputShow = ref(false);
    const taskContent = computed(() => props.task.content);

    const onEdit = () => {
      console.log(123);
      isEditing.value = true;
      isInputShow.value = true;
    };

    const onSubmit = async (id) => {
      if (!taskText.value) return;
      if (taskText.value !== taskContent.value) {
        isEditing.value = false;
        await store.dispatch("todo/editTask", {
          id,
          content: taskText.value
        });
      }

      isInputShow.value = false;
    };

    // enter 送出後，也會觸發 blur，指定 isEditing 為 true 才打 api
    const onBlur = (id) => {
      if (!isEditing.value) return;
      onSubmit(id);
    };

    const onCancelEdit = () => {
      isEditing.value = false;
      isEditing.value = false;
    };

    return {
      taskText,
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
