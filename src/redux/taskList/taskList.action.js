import taskListTypes from "./taskList.type";
import uniqid from "uniqid";

export const addTask = (newTask) => {
  return {
    type: taskListTypes.ADD_TASK,
    payload: { _id: uniqid(), title: newTask, doneFlag: false },
  };
};

export const editTask = (targetTask, editedTitle) => {
  return {
    type: taskListTypes.EDIT_TASK,
    payload: {
      _id: targetTask._id,
      title: editedTitle,
      doneFlag: targetTask.doneFlag,
    },
  };
};

export const deleteTask = (targetTask) => {
  return {
    type: taskListTypes.DELETE_TASK,
    payload: targetTask,
  };
};

export const doneTaskToggle = (targetTask) => {
  return {
    type: taskListTypes.DONE_TASK_TOGGLE,
    payload: targetTask,
  };
};
