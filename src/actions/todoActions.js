import { FETCH_TODOS, NEW_TODO } from "./types";
import todoList from "../components/Todos/todoList";

console.log(todoList);
let editableTodoList = todoList;

export const fetchTodos = () => (dispatch) => {
  dispatch({
    type: FETCH_TODOS,
    payload: editableTodoList,
  });
};

export const createTodo = (newTask) => (dispatch) => {
  editableTodoList = [...editableTodoList, newTask];

  dispatch({
    type: NEW_TODO,
    payload: editableTodoList,
  });
};

export const updateTodo = (taskId, isComplete) => (dispatch) => {
  dispatch({
    type: NEW_TODO,
    payload: editableTodoList.map((todo) => {
      if (todo.id == taskId) {
        todo.is_complete = isComplete;
      }
    }),
  });
};
