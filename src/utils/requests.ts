import { Todo } from "../context/TodosContext";

export const createTodo = async (todo: Omit<Todo, "id">) => {
  const res = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res.json();
};

export const updateTodo = async (todo: Todo) => {
  const { id, ...rest } = todo;
  const res = await fetch(`https://dummyjson.com/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(rest),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return res.json();
};

export const deleteTodo = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
