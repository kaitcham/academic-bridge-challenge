import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface ContextProps {
  todos: Todo[];
  allTodos: Todo[];
  todo: Todo | string;
  selectedOption: string;
  setTodo: (todo: Todo | string) => void;
  setAllTodos: (todos: Todo[]) => void;
  setSelectedOption: (option: string) => void;
}

export const TodosContext = createContext({} as ContextProps);

export const TodosProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todo, setTodo] = useState<Todo | string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const [selectedOption, setSelectedOption] = useState("All Tasks");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setAllTodos(data));
  }, []);

  const todos = allTodos.filter((todo) => {
    if (selectedOption === "All Tasks") return todo;
    if (selectedOption === "To Do") return !todo.completed;
    if (selectedOption === "In Progress") return;
    if (selectedOption === "Completed") return todo.completed;
    return todo;
  });

  return (
    <TodosContext.Provider
      value={{
        todo,
        todos,
        allTodos,
        selectedOption,
        setTodo,
        setAllTodos,
        setSelectedOption,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
