import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useTodosContext } from "../context/TodosContext";
import ToggleDarkMode from "./ToggleDarkMode";
import { NotificationIcon } from "./icons/NotificationIcon";
import { SearchIcon } from "./icons/SearchIcon";

export const TopNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchedTodos, setAllTodos } = useTodosContext();
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setAllTodos(fetchedTodos);
      return;
    }
    const filteredTodos = fetchedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setAllTodos(filteredTodos);
  };

  return (
    <div className="flex justify-between bg-white p-3 sm:p-5 dark:bg-slate-800">
      <form className="w-2/3 sm:w-2/5">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-md bg-gray-100 p-2 dark:bg-gray-700"
        >
          <ToggleDarkMode isDarkMode={isDarkMode} />
        </button>
        <span className="hidden rounded-md bg-gray-100 p-2 sm:block dark:bg-gray-700">
          <NotificationIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};
