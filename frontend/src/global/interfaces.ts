interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  dueAt: Date;
  categoryId: number;
  isCompleted: boolean;
}

interface Category {
  id: number;
  name: string;
}

interface Icon {
  path: string;
  alt: string;
}
