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
    <ul className="divide-y-2 px-4 max-sm:px-[20px] max-sm:ml-[50px] max-sm:mx-auto max-sm:max-w-[300px] md:px-[200px]  divide-gray-300">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between md:py-8 py-4"
        >
          <span className="text-xl max-sm:text-xl font-serif">{task.name}</span>
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
