import {
  ADD_TASK,
  EDIT_TODO,
  CONFIRM_TODO,
  REMOVE_TASK_BY_ID,
  USER_FETCH_FAILED,
} from './types'

const initialState = {
  taskList: [
    {
      id: 1,
      task: 'Acordar 6:00 horas',
      description: 'Meditar 15 minutos',
      done: false,
    },
    {
      id: 2,
      task: 'Fazer Yoga 6:25 horas',
      description: 'durante 20 minutos e correr por 15 minutos',
      done: false,
    },
  ],
  showError: false,
}

export const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case EDIT_TODO: {
      const newState = { ...state, showError: false }
      return newState.taskList.map((todo) =>
        todo.id === action.id
          ? {
              id: todo.id,
              task: action.task,
              description: action.description,
              done: todo.done,
            }
          : todo,
      )
    }

    case CONFIRM_TODO: {
      const newState = { ...state, showError: false }
      return newState.taskList.map((todo) =>
        todo.id === action.id
          ? {
              id: todo.id,
              task: todo.task,
              description: todo.description,
              done: !action.done,
            }
          : todo,
      )
    }

    case ADD_TASK: {
      const newState = { ...state, showError: false }
      newState.taskList.push(payload)
      return newState
    }

    case REMOVE_TASK_BY_ID: {
      const newState = { ...state }
      newState.taskList = newState.taskList.filter(({ id }) => id !== payload)
      return newState
    }

    case USER_FETCH_FAILED:
      return { ...state, showError: true }

    default:
      return state
  }
}
