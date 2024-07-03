import { useState } from "react";
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
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const h1Variant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const childrenVarient = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const App = () => {
  const [timer, setTimer] = useState("00:00");
  const [taskList, setTaskList] = useState<taskType[]>([
    { task: "Do Dishes", completed: false },
    { task: "Mow Lawn", completed: false },
    { task: "Sky Diving", completed: false },
  ]);
  return (
    <motion.main
      variants={containerVariant}
      initial={"hidden"}
      animate={"show"}
      className="flex flex-col items-center gap-10 "
    >
      <motion.h1 variants={h1Variant}>
        To-Do Manager
      </motion.h1>
      <motion.div variants={childrenVarient}>
        <NewTask />
      </motion.div>
      <motion.div variants={childrenVarient}>
        <TimerDisplay timer={timer} />
      </motion.div>
      <motion.div
        variants={childrenVarient}
        className="flex justify-center w-full"
      >
        <TasksList taskList={taskList} />
      </motion.div>
    </motion.main>
  );
};
export default App;
