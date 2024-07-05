import { AnimatePresence, motion } from "framer-motion";
import { taskType } from "../types/typeIndex";

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

  const deleteTask = (taskName: string) => {
    const find = taskList.find(
      (task) => task.task === taskName
    );

    if (find) {
      let newTasks = [...taskList];
      const index = newTasks.indexOf(find);
      newTasks.splice(index, 1);
      setTaskList(newTasks);
    }
  };

  return (
    <section className="w-[80%]  my-5">
      {taskList.length > 0 ? (
        <ul className="flex flex-col gap-5">
          <AnimatePresence mode="popLayout">
            {taskList.map((taskObj) => (
              <motion.li
                key={taskObj.task}
                className="flex items-center justify-around gap-2 p-3 group hover:bg-secondary hover:dark:bg-dark_secondary/50"
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{ type: "spring" }}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 checked:accent-accent checked:dark:accent-dark_accent hover:cursor-pointer accent-red-500"
                  checked={taskObj.completed}
                  onChange={(e) =>
                    checkboxChanged(e, taskObj.task)
                  }
                />
                <p className="text-white text-r-xl group-hover:scale-[1.5] transition duration-200">
                  {taskObj.task}
                </p>
                <button
                  className="text-r-2xl text-accent dark:text-dark_accent"
                  onClick={() => {
                    deleteTask(taskObj.task);
                  }}
                >
                  <i className="fa-solid fa-trash" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className="flex justify-center text-r-3xl text-text dark:text-dark_text">
          No Tasks
        </div>
      )}
    </section>
  );
};
export default TasksList;
