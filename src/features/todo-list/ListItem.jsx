import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import toast from "react-hot-toast";
import Tooltip from "../../components/tooltip";

const ListItem = ({ todoList, setTodoList, setAddTask }) => {
  // Set task for editing
  const handleEdit = task => {
    setAddTask(task);
  };

  // Delete task using its unique id
  const handleDelete = id => {
    const filteredTodoList = todoList.filter(task => task.id !== id);
    setTodoList(filteredTodoList);
  };

  // Toggle completion for a task using its unique id
  const handleComplete = (id, taskValue, taskCompleted) => {
    const updatedTodoList = todoList.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTodoList(updatedTodoList);

    toast.success(
      taskCompleted ? `${taskValue} - Task not completed` : `${taskValue} - Task completed`
    );
  };

  return (
    <div className="w-full space-y-4">
      {todoList.map(task => (
        <div key={task.id} className="flex flex-row justify-between items-start gap-x-3">
          <div
            className="flex flex-row justify-start items-start gap-x-4 cursor-pointer"
            onClick={() => handleComplete(task.id, task.todoValue, task.isCompleted)}
          >
            <span className="h-5 w-5">
              {task.isCompleted ? (
                <FaCheckCircle color="#16a34a" size={22} />
              ) : (
                <FaRegCircle color="#484d5c" size={22} />
              )}
            </span>

            <span className={`break-all ${task.isCompleted ? "line-through" : "no-underline"}`}>
              {task.todoValue}
            </span>
          </div>

          <div className="flex flex-row gap-3">
            <Tooltip text="Edit" left="left-1/2">
              <div
                className="h-5 w-5 cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 hover:dark:text-green-500"
                onClick={() => handleEdit(task)}
              >
                <TbEdit size={20} />
              </div>
            </Tooltip>
            <Tooltip text="Delete" left="left-1/2">
              <div
                className="h-5 w-5 cursor-pointer text-red-500 dark:text-red-400 hover:text-red-600 hover:dark:text-red-500"
                onClick={() => handleDelete(task.id)}
              >
                <RiDeleteBin6Line size={20} />
              </div>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
