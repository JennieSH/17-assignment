import { getFakeApi, setFakeApi } from "@/api/todo";
import { TaskStatus } from "@/constants/todo";

const state = () => ({
  list: [],
  tab: TaskStatus.ALL,
  isLoading: false
});

const getters = {
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
};

const mutations = {
  switchTab(state, newTab) {
    state.tab = newTab;
  },
  setLoadingStatus(state, status) {
    state.isLoading = status;
  },
  setListData(state, data) {
    state.list = data;
  }
};

const actions = {
  // api loading
  async apiLoadingHelper({ commit }, callback) {
    commit("setLoadingStatus", true);
    const data = await callback();

    commit("setLoadingStatus", false);

    return data;
  },
  // 取得任務
  async fetchTasks({ commit, dispatch }) {
    const data = await dispatch("apiLoadingHelper", getFakeApi);

    commit("setListData", data);
  },
  // 變更任務完成狀態
  async toggleTask({ state, dispatch }, id) {
    const data = state.list.map((task) => {
      if (task.id === id) return { ...task, done: !task.done };

      return task;
    });

    await dispatch("apiLoadingHelper", () => setFakeApi(data));
    dispatch("fetchTasks");
  },
  // 新增任務
  async addTask({ dispatch, state }, content) {
    const data = [
      ...state.list,
      {
        id: new Date().getTime(),
        content,
        done: false
      }
    ];

    await dispatch("apiLoadingHelper", () => setFakeApi(data));
    dispatch("fetchTasks");
  },
  // 刪除任務
  async deleteTask({ dispatch, state }, id) {
    const data = state.list.filter((item) => item.id !== id);

    await dispatch("apiLoadingHelper", () => setFakeApi(data));
    dispatch("fetchTasks");
  },
  // 修改任務
  async editTask({ dispatch, state }, { id, content }) {
    const data = state.list.map((task) => {
      if (task.id === id) return { ...task, content };

      return task;
    });

    await dispatch("apiLoadingHelper", () => setFakeApi(data));
    dispatch("fetchTasks");
  }
};

export { state, getters, mutations, actions };
