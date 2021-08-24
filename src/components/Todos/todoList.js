import { v4 as uuidv4 } from "uuid";

const todoList = [
  {
    id: uuidv4(),
    task: "Campaign creative concepts",
    priority: "med",
    is_complete: false,
  },
  {
    id: uuidv4(),
    task: "Campaign messaging",
    priority: "high",
    is_complete: false,
  },
  {
    id: uuidv4(),
    task: "Campaign performance tracking",
    priority: "low",
    is_complete: true,
  },
];

export default todoList;
