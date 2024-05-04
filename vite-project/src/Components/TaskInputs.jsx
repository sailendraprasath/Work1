// TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center md:pt-5 justify-center mt-5 sm:mt-0">
      <input
        className="border border-gray-300 rounded-tl-xl rounded-bl-xl py-2 px-4 focus:outline-none focus:border-green-500 mb-2 sm:mb-0 sm:mr-2"
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
