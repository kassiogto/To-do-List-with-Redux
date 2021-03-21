import * as actionTypes from "../action/actionTypes";

const INITIAL_STATE = [
  {
    id: 1,
    task: "Acordar 6:00 horas",
    description: "Meditar 15 minutos",
    done: false,
  },
  {
    id: 2,
    task: "Fazer Yoga 6:25 horas",
    description: "durante 20 minutos e correr por 15 minutos",
    done: false,
  },
];

export const todoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.task,
          description: action.description,
          done: false,
        },
      ];
    case actionTypes.DELETE_TODO:
      return state.filter((task) => task.id !== action.id);

    case actionTypes.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: todo.id,
              task: action.task,
              description: action.description,
              done: todo.done,
            }
          : todo
      );

    case actionTypes.CONFIRM_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: todo.id,
              task: todo.task,
              description: todo.description,
              done: !action.done,
            }
          : todo
      );

    default:
      return state;
  }
};
