import { Task } from "@/type/todo";
import { getLocalItem, setLocalItem } from "@/utils/localStorage";

const LOCAL_STORAGE_KEY = "todo";

// 取得任務 api
const getFakeApi = (): Promise<Task[]> => {
  if (process.server) return Promise.resolve([]);

  return new Promise((resolve) => {
    setTimeout(() => {
      const localData = getLocalItem(LOCAL_STORAGE_KEY);

      resolve(localData ? JSON.parse(localData) : []);
    }, 500);
  });
};

// 更新任務的 api
const setFakeApi = (data: Task[]): Promise<string> => {
  if (process.server) return Promise.resolve("skip");

  return new Promise((resolve) => {
    setTimeout(() => {
      setLocalItem(LOCAL_STORAGE_KEY, data);
      resolve("done !");
    }, 500);
  });
};

export { getFakeApi, setFakeApi };
