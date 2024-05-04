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
    <div className="flex items-center justify-center mt-[50px]">
      <input
        className="border border-gray-300 rounded-tl-xl rounded-bl-xl py-2 px-4 focus:outline-none focus:border-green-500"
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
