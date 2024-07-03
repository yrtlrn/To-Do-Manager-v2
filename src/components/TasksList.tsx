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
}: {
  taskList: taskType[];
}) => {
  return (
    <section className="w-[80%] md:w-[70%] mt-5">
      {taskList.length > 0 ? (
        <ul className="list-none">
          {taskList.map((task) => (
            <motion.li
              className="grid items-center grid-cols-4 grid-rows-1 gap-2 p-3 hover:bg-slate-300"
              initial={"default"}
              whileHover={"hover"}
            >
              <input
                type="checkbox"
                className="w-5 h-5 focus:ring-red-200 checked:bg-red-500 checked:accent-red-500 hover:cursor-pointer"
              />
              <motion.span
                className={`col-span-2 text-r-xl ${
                  task.completed && "line-through"
                }`}
                variants={liVariants}
              >
                {task.task}
              </motion.span>
              <span className="flex justify-end material-symbols-outlined text-r-3xl hover:cursor-pointer">
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
