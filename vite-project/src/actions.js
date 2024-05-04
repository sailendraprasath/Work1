// actions.js
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: {
    name,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: {
    taskId,
  },
});
