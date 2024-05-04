// reducers.js
import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        name: action.payload.name,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    default:
      return state;
  }
};

export default reducer;
