interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  dueAt: Date;
  categoryId: number;
  isCompleted: boolean;
}
