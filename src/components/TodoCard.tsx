import { Todo, useTodosContext } from "../context/TodosContext";
import MoreOption from "./MoreOption";

interface TodoCardProps {
  todo: Todo;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const { allTodos, setAllTodos } = useTodosContext();

  const handleChangle = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const updatedTodos = allTodos.map((t) =>
      t.id === todo.id ? updatedTodo : t,
    );
    setAllTodos(updatedTodos);
  };

  const styles = todo.completed
    ? "bg-green-100/30 text-green-500"
    : "bg-yellow-100/30 text-yellow-500";

  return (
    <div className="rounded-lg bg-white px-3 py-4 sm:max-w-xs dark:bg-slate-800">
      <div className="flex items-center justify-between ">
        <span className={`${styles} rounded-md px-2 py-1 text-xs`}>
          {todo.completed ? "Completed" : "To Do"}
        </span>
        <MoreOption todo={todo} />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        {todo.title}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="custom-checkbox h-5 w-5"
            checked={todo.completed}
            onChange={handleChangle}
          />
          <label className="dark:text-slate-400">Mark as done</label>
        </div>
      </div>
    </div>
  );
};
