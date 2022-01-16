import { defineStore, acceptHMRUpdate } from "pinia";
import { TodoState, TaskStatus, Task } from "@/type/todo";
import { getFakeApi, setFakeApi } from "@/api/todo";

export const useTodoStore = defineStore("todo", {
  state: (): TodoState => ({
    list: [],
    tab: TaskStatus.ALL,
    isLoading: false
  }),

  getters: {
    filteredList: ({ list, tab }) => {
      switch (tab) {
        case TaskStatus.DONE:
          return list.filter((task) => task.done);
        case TaskStatus.IN_PROGRESS:
          return list.filter((task) => !task.done);
        case TaskStatus.ALL:
        default:
          return list;
      }
    },
    isEmptyList: ({ list }) => list.length === 0
  },

  actions: {
    // api loading
    async apiLoadingHelper<T>(callback: Function): Promise<T> {
      this.isLoading = true;
      const data = await callback();

      this.isLoading = false;

      return data;
    },
    // 取得任務
    async fetchTasks() {
      this.list = await this.apiLoadingHelper<Task[]>(getFakeApi);
    },
    // 變更任務完成狀態
    async toggleTask(id: number) {
      const data = this.list.map((task) => {
        if (task.id === id) return { ...task, done: !task.done };

        return task;
      });

      await this.apiLoadingHelper(() => setFakeApi(data));
      this.fetchTasks();
    },
    // 新增任務
    async addTask(content: string) {
      const data = [
        ...this.list,
        {
          id: new Date().getTime(),
          content,
          done: false
        }
      ];

      await this.apiLoadingHelper(() => setFakeApi(data));
      this.fetchTasks();
    },
    // 刪除任務
    async deleteTask(id: number) {
      const data = this.list.filter((item) => item.id !== id);

      await this.apiLoadingHelper(() => setFakeApi(data));
      this.fetchTasks();
    },
    // 修改任務
    async editTask(id: number, content: string) {
      const data = this.list.map((task) => {
        if (task.id === id) return { ...task, content };

        return task;
      });

      await this.apiLoadingHelper(() => setFakeApi(data));
      await this.fetchTasks();
    },
    switchTab(newTab: TaskStatus) {
      this.tab = newTab;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot));
}
