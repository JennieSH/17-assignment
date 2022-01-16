enum TaskStatus {
  ALL = "All",
  DONE = "Done",
  IN_PROGRESS = "In Progress"
}

interface Task {
  id: number;
  content: string;
  done: boolean;
}

interface TodoState {
  list: Task[];
  tab: TaskStatus;
  isLoading: Boolean;
}

export { Task, TodoState, TaskStatus };
