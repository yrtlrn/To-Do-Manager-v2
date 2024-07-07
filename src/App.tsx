import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import TimerDisplay from "./components/TimerDisplay";
import TasksList from "./components/TasksList";
import { taskType } from "./types/typeIndex";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childrenVarient = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

const App = () => {
  const [taskList, setTaskList] = useState<taskType[]>([]);

  // Alert On Refresh
  useEffect(() => {
    const uploadCallBack = (e: { preventDefault: () => void; returnValue: string; }) => {
      if (e) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };
    window.addEventListener("beforeunload", uploadCallBack);
    return () =>
      window.removeEventListener(
        "beforeunload",
        uploadCallBack
      );
  }, []);

  return (
    <motion.main
      variants={containerVariant}
      initial={"hidden"}
      animate={"show"}
      className="flex flex-col items-center min-h-screen gap-10 bg-background dark:bg-dark_background"
    >
      <motion.h1
        initial={{ opacity: 0, y: "50vh" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            y: {
              delay: 1,
              duration: 1,
            },
            ease: "easeInOut",
            duration: 2,
          },
        }}
      >
        To-Do Manager
      </motion.h1>

      <motion.div variants={childrenVarient}>
        <NewTask
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </motion.div>

      <motion.div variants={childrenVarient}>
        <TimerDisplay />
      </motion.div>

      <motion.div
        className="flex justify-center w-[90%]"
        variants={childrenVarient}
      >
        <TasksList
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </motion.div>
    </motion.main>
  );
};
export default App;
