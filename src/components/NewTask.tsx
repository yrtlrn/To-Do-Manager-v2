import { useState } from "react";
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

  const addNewTask = () => {
    if (newTask) {
      const find = taskList.find(
        (task) => task.task === newTask
      );

      if (find) {
        setShowError(true);
        return;
      } else {
        setShowError(false)
        setTaskList((prev) => [
          ...prev,
          { task: newTask, completed: false },
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
    <section className="flex flex-col">
      <div className="flex gap-2">
        <input
          className="p-2 border-2 border-black rounded-lg text-r-xl"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={(k) => onKeyPress(k)}
        />
        <button
          className="px-2 font-semibold transition ease-in-out border-2 border-black shadow rounded-xl text-r-xl hover:shadow-lg hover:scale-110 hover:cursor-pointer"
          onClick={() => addNewTask()}
        >
          Add Task
        </button>
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
