import { useGlobalContext } from "../context/GlobalContext";
import { useTodosContext } from "../context/TodosContext";
import { FilterOption } from "./FilterOption";
import { FilterIcon } from "./icons/FilterIcon";

export const Filters = () => {
  const { setIsFormModalOpen } = useGlobalContext();
  const { allTodos, selectedOption, setSelectedOption } = useTodosContext();

  return (
    <div className="rounded-lg bg-white p-3 sm:mb-5 sm:flex sm:items-center sm:justify-between sm:px-2 sm:py-0 lg:max-w-3xl lg:px-4 xl:max-w-4xl dark:bg-slate-800">
      <div className="grid grid-cols-2 gap-2 sm:flex sm:space-x-1 md:space-x-2 lg:space-x-4">
        <FilterOption
          text="All Tasks"
          number={allTodos.length}
          isSelected={selectedOption === "All Tasks"}
          handleClick={() => setSelectedOption("All Tasks")}
        />
        <FilterOption
          text="To Do"
          number={allTodos.filter((todo) => todo.completed === false).length}
          isSelected={selectedOption === "To Do"}
          handleClick={() => setSelectedOption("To Do")}
        />
        <FilterOption
          text="In Progress"
          number={
            allTodos.filter(
              (todo) => !todo.completed && todo.completed !== false,
            ).length
          }
          isSelected={selectedOption === "In Progress"}
          handleClick={() => setSelectedOption("In Progress")}
        />
        <FilterOption
          text="Completed"
          number={allTodos.filter((todo) => todo.completed === true).length}
          isSelected={selectedOption === "Completed"}
          handleClick={() => setSelectedOption("Completed")}
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-0 sm:flex sm:gap-2 lg:gap-4">
        <button className="flex items-center justify-center gap-1 rounded-md border py-2 text-xs sm:px-2 sm:py-1 lg:gap-2 lg:px-3 xl:text-base dark:border-gray-700 dark:text-slate-50">
          <FilterIcon className="h-4 w-4" />
          Filter & Sort
        </button>
        <button
          onClick={() => setIsFormModalOpen(true)}
          className="flex items-center justify-center gap-1 rounded-md border py-2 text-xs sm:px-2 sm:py-1 lg:gap-2 lg:px-3 xl:text-base dark:border-gray-700 dark:text-slate-50"
        >
          <span>+</span>
          <span>New task</span>
        </button>
      </div>
    </div>
  );
};
