import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Todo, useTodosContext } from "../context/TodosContext";
import { createTodo, updateTodo } from "../utils/requests";

export const TodoFormModal = () => {
  const { todo, allTodos, setTodo, setAllTodos, setFetchedTodos } =
    useTodosContext();
  const { isUpdating, isFormModalOpen, setIsFormModalOpen, setIsUpdating } =
    useGlobalContext();

  const closeModal = () => {
    setTodo("");
    setIsUpdating!(false);
    setIsFormModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isUpdating) setTodo(e.target.value);
    else setTodo({ ...(todo as Todo), todo: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!isUpdating) {
        const newTodo = await createTodo({
          todo: todo as string,
          completed: false,
          userId: 1,
        });
        const updatedTodos = [newTodo, ...allTodos];
        setAllTodos(updatedTodos);
        setFetchedTodos(updatedTodos);
      } else {
        const updatedTodo = await updateTodo(todo as Todo);
        const updatedTodos = allTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo,
        );
        setAllTodos(updatedTodos);
        setFetchedTodos(updatedTodos);
      }
    } catch (error) {
      console.error(error);
    }
    closeModal();
  };

  return (
    <>
      <Transition appear show={isFormModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {isUpdating ? "Edit Todo" : "Create New Todo"}
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="mt-5">
                    <label htmlFor="task" className="mb-1 block text-lg">
                      Todo
                    </label>
                    <textarea
                      rows={5}
                      required
                      name="task"
                      ref={(el) =>
                        el?.setSelectionRange(el.value.length, el.value.length)
                      }
                      value={typeof todo === "string" ? todo : todo.todo}
                      onChange={handleChange}
                      placeholder="Enter your task here..."
                      className="w-full rounded-md border px-2 py-1"
                    />
                    <div className="mt-5 flex justify-end">
                      <button
                        type="submit"
                        className="rounded-md bg-slate-400/80 px-3 py-1 text-white"
                      >
                        {isUpdating ? "Update Todo" : "Add Todo"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
