import { useRef, useState } from "react";
import { taskType } from "../types/typeIndex";

const NewTask = ({
  setTaskList,
  taskList,
}: {
  setTaskList: React.Dispatch<
    React.SetStateAction<taskType[]>
  >;
  taskList: taskType[];
}) => {
  const [newTask, setNewTask] = useState("");
  const [showError, setShowError] = useState(false);
  const taskCount = useRef(0);

  const addNewTask = () => {
    if (newTask) {
      const find = taskList.find(
        (task) => task.task === newTask.trim()
      );

      if (find) {
        setShowError(true);
        return;
      } else {
        setShowError(false);
        taskCount.current++;
        setTaskList((prev) => [
          ...prev,
          {
            no: taskCount.current,
            task: newTask,
            completed: false,
          },
        ]);
        setNewTask("");
        return;
      }
    }
  };

  const onKeyPress = (
    k: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (k.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <section className="flex flex-col ">
      <div className="flex gap-4">
        <input
          className="p-2 border-2 border-black rounded-lg text-r-xl bg-secondary dark:bg-dark_secondary text-text dark:text-dark_text focus:ring-2 focus:ring-primary focus:ring-offset-slate-700"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={(k) => onKeyPress(k)}
        />
        <div className="relative transition group duration-[200] ease-in-out">
          <div className="absolute transition duration-1000 opacity-25 show -inset-1 bg-accent dark:bg-dark_accent blur group-hover:opacity-100 group-hover:duration-200"></div>
          <button
            className=" relative show p-2 font-semibold transition ease-in-out border-2 border-primary dark:border-dark_primary rounded-xl text-r-xl hover:scale-[1.2] hover:cursor-pointer bg-primary text-text dark:bg-primary dark:text-dark_text"
            onClick={() => addNewTask()}
          >
            Add Task
          </button>
        </div>
      </div>
      {showError && (
        <span className="errorText">
          This task already exist
        </span>
      )}
    </section>
  );
};
export default NewTask;
