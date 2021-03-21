import * as actionTypes from "../action/actionTypes";

export const addTask = (task, description) => {
    return {
        type: actionTypes.ADD_TODO,
        task: task,
        description: description
    }
}

export const excludeTask = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
}

export const editTask = (task, id, description) => {
    return {
        type: actionTypes.EDIT_TODO,
        task: task,
        description: description,
        id: id
    }
}

export const confirmTask = (done, id) => {
    return {
        type: actionTypes.CONFIRM_TODO,
        done: done,
        id: id,
    }
}