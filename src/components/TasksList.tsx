import { motion } from "framer-motion";
import { taskType } from "../types/typeIndex";

const liVariants = {
  default: {
    scale: 1.2,
    originX: 0,
  },
  hover: {
    scale: 1.5,
    originX: 0,
  },
};

const TasksList = ({
  taskList,
  setTaskList,
}: {
  taskList: taskType[];
  setTaskList: React.Dispatch<
    React.SetStateAction<taskType[]>
  >;
}) => {
  const checkboxChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    taskName: string
  ) => {
    const find = taskList.find(
      (task) => task.task === taskName
    );
    if (find) {
      let newTasks = [...taskList];
      newTasks[newTasks.indexOf(find)].completed =
        e.target.checked;
      setTaskList(newTasks);
    }
  };

  const deleteTask = (
    taskName: string,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    const find = taskList.find(
      (task) => task.task === taskName
    );

    if (find) {
      let newTasks = [...taskList];
      const index = newTasks.indexOf(find);
      newTasks.splice(index, 1);
      setTaskList(newTasks);
      console.log(taskList)
    }
  };

  return (
    <section className="w-[80%] md:w-[70%] my-5">
      {taskList.length > 0 ? (
        <ul className="list-none">
          {taskList.map((task, index) => (
            <motion.li
              className="grid items-center grid-cols-[0fr,1fr,1fr,1fr] grid-rows-1 gap-2 p-3 hover:bg-slate-300"
              initial={"default"}
              whileHover={"hover"}
              key={index}
            >
              <input
                type="checkbox"
                className="w-5 h-5 focus:ring-red-200 checked:bg-red-500 checked:accent-red-500 hover:cursor-pointer"
                checked={task.completed}
                onChange={(e) =>
                  checkboxChanged(e, task.task)
                }
              />
              <motion.span
                className={` col-span-2 text-r-xl ${
                  task.completed && "line-through"
                }`}
                variants={liVariants}
              >
                {task.task}
              </motion.span>
              <span
                className="flex justify-end material-symbols-outlined text-r-3xl hover:cursor-pointer"
                onClick={(e) => deleteTask(task.task,e)}
              >
                delete
              </span>
            </motion.li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center text-r-3xl">
          No Tasks
        </div>
      )}
    </section>
  );
};
export default TasksList;
