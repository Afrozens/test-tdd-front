import { Todo } from "../models/todo";

export const dataMock: Todo[] = [
  { title: "test-01", isCompleted: false, id: "string-uid" },
  {
    title: "title-02",
    isCompleted: true,
    id: "string-uid2",
  },
  {
    title: "title-03",
    isCompleted: true,
    id: "string-uid3",
  },
];

export const taskMock: Todo = {
  title: "test-01",
  isCompleted: false,
  id: "string-uid",
};
