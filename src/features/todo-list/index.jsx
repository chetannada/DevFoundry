import { useState, useEffect } from "react";
import { RiAddCircleLine, RiCalendarTodoLine } from "react-icons/ri";
import ListItem from "./ListItem";
import { AiOutlineEdit } from "react-icons/ai";

const ToDoList = () => {
  // Initial state object for a task
  const initialValue = {
    id: null,
    todoValue: "",
    isCompleted: false,
  };

  const [addTask, setAddTask] = useState(initialValue);
  const [todoList, setTodoList] = useState(() => {
    const localData = localStorage.getItem("todoList");
    return localData ? JSON.parse(localData) : [];
  });

  // update localStorage when todoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // Update input value
  const handleChange = event => {
    const { name, value } = event.target;
    setAddTask({ ...addTask, [name]: value });
  };

  // Add a new task or update an existing one
  const handleAddTask = event => {
    event.preventDefault();
    // check the field is not just whitespace
    if (!addTask.todoValue.trim()) return;

    if (addTask.id) {
      // Update existing task using unique id
      const updatedList = todoList.map(task =>
        task.id === addTask.id ? { ...addTask, todoValue: addTask.todoValue.trim() } : task
      );
      setTodoList(updatedList);
      setAddTask(initialValue);
    } else {
      // Create a new task with a unique id using Date.now()
      const newTask = {
        id: Date.now(),
        todoValue: addTask.todoValue.trim(),
        isCompleted: false,
      };
      setTodoList([...todoList, newTask]);
      setAddTask(initialValue);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-128 min-h-96 flex flex-col justify-start items-start px-8 py-6 space-y-6 overflow-hidden bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
        <div className="flex gap-3 justify-center items-center text-3xl font-medium">
          <RiCalendarTodoLine />
          <h1>To-Do List</h1>
        </div>

        {/* Form submission handles both button click and Enter key */}
        <form onSubmit={handleAddTask} className="w-full mx-auto relative">
          <input
            id="todoValue"
            name="todoValue"
            type="text"
            required
            className="block w-full p-4 ps-4 pe-24 text-sm rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
            value={addTask.todoValue}
            onChange={handleChange}
            placeholder="Add your task..."
            autoComplete="off"
          />

          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 flex flex-row gap-2 items-center focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl"
          >
            {addTask.id ? (
              <>
                <AiOutlineEdit size={18} /> Update
              </>
            ) : (
              <>
                <RiAddCircleLine size={18} /> Add
              </>
            )}
          </button>
        </form>

        {/* Render tasks using ListItem component */}
        {todoList.length > 0 && (
          <ListItem todoList={todoList} setTodoList={setTodoList} setAddTask={setAddTask} />
        )}
      </div>
    </div>
  );
};

export default ToDoList;
