// TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul className="divide-y-2 px-[400px] divide-gray-300">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between py-4">
          <span className="text-lg font-serif">{task.name}</span>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="text-red-500 font-bold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
