import taskListTypes from "./taskList.type";

const initialState = {
  taskList: [],
};

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    //   ===========Add==============
    case taskListTypes.ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    //   ===========Update==============
    case taskListTypes.EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task._id === action.payload._id) {
            return {
              _id: task._id,
              title: action.payload.title,
              doneFlag: action.payload.doneFlag,
            };
          } else return task;
        }),
      };
    //   ===========Delete==============
    case taskListTypes.DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(
          (task) => task._id !== action.payload._id
        ),
      };
    //   ===========Toggle done flag==============
    case taskListTypes.DONE_TASK_TOGGLE:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task._id === action.payload._id) {
            return {
              _id: task._id,
              title: action.payload.title,
              doneFlag: !action.payload.doneFlag,
            };
          } else return task;
        }),
      };

    default:
      return state;
  }
};

export default taskListReducer;
