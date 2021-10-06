import React, { useState } from "react";

import {
  Container,
  ButtonEdit,
  InputEdit,
  ButtonAddTask,
  ButtonExclude,
  Item,
  ContentButton,
  ContentTask,
} from "./styles";

export default function TodoItem({
  task,
  description,
  done,
  taskId,
  editTask,
  removeTask,
  confirmTask,
}) {
  const [toggleEdit, setToggleEdit] = useState(true);
  const [newTask, setNewTask] = useState(task);
  const [newDescription, setDescription] = useState(description);
  
  

  function handleChangeTask(e) {
    setNewTask(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit() {
    editTask(newTask, taskId, newDescription);
    setToggleEdit(true);
  }

  return (
    <Container>
      {toggleEdit ? (
        <Item>
          <div onClick={() => confirmTask(done, taskId)}>
            {done ? (
              <i className="far fa-calendar-check"></i>
            ) : (
              <i className="far fa-calendar-times"></i>
            )}
          </div>
          <ContentTask>
            <span className="task">{task}</span>
            <span className="description">{description}</span>
          </ContentTask>
          <ContentButton>
            <ButtonEdit onClick={() => setToggleEdit(!toggleEdit)}>
              <i className="fas fa-edit"></i>
            </ButtonEdit>
            <ButtonExclude onClick={() => removeTask(taskId)}>
              <i className="far fa-trash-alt"></i>
            </ButtonExclude>
          </ContentButton>
        </Item>
      ) : (
        <Item>
          <ContentTask>
            <InputEdit
              onChange={handleChangeTask}
              value={newTask}
              maxLength="40"
            />
            <InputEdit
              maxLength="52"
              onChange={handleChangeDescription}
              value={newDescription}
            />
          </ContentTask>
          <ContentButton>
            <ButtonAddTask onClick={() => handleSubmit()}>
              Confirmar
            </ButtonAddTask>
          </ContentButton>
        </Item>
      )}
    </Container>
  );
}
