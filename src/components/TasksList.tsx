import {
  AnimatePresence,
  motion,
  Reorder,
} from "framer-motion";
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
    <section className="w-[100%] h-full  my-10">
      {taskList.length > 0 ? (
        <ul className="flex flex-col items-center w-full gap-4 ">
          <AnimatePresence mode="popLayout">
            <Reorder.Group
              axis="y"
              values={taskList}
              onReorder={setTaskList}
              className="w-[70%]"
            >
              {taskList.map((taskObj) => (
                <Reorder.Item value={taskObj} key={taskObj.task} >
                  <motion.li
                    key={taskObj.task}
                    className="flex items-center justify-between gap-2 p-3 w-[100%] group hover:bg-secondary hover:dark:bg-dark_secondary/50 h-full"
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
                      className="flex-none w-5 h-5 checked:accent-accent checked:dark:accent-dark_accent hover:cursor-pointer accent-red-500"
                      checked={taskObj.completed}
                      onChange={(e) =>
                        checkboxChanged(e, taskObj.task)
                      }
                    />

                    <p className="text-white text-r-xl group-hover:scale-[1.3] transition duration-200 flex-1 text-center max-w-[60%] break-words h-fit mx-10">
                      {taskObj.task}
                    </p>

                    <button
                      className="flex-none text-r-2xl text-accent dark:text-dark_accent hover:scale-110"
                      onClick={() => {
                        deleteTask(taskObj.task);
                      }}
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  </motion.li>
                </Reorder.Item>
              ))}
            </Reorder.Group>
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
