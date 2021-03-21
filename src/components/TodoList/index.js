import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  excludeTask,
  editTask,
  confirmTask,
} from "../../store/action/todoListAction";
import { useFormik } from "../../utils/formik";
import TodoItem from "../TodoItem";

import {
  Container,
  ContentTodoRegister,
  TitleTodo,
  SubTitleTodo,
  ListTodo,
  InputTodo,
  InputDescription,
  ButtonAddTask,
  FormFielderror,
} from "./styles";

export default function TodoList() {
  const tasks = useSelector((state) => state.todoListReducer);
  const dispatch = useDispatch();

  const addTodo = (task, description) => dispatch(addTask(task, description));
  const excludeTodo = (id) => dispatch(excludeTask(id));
  const editTodo = (task, id, description) =>
    dispatch(editTask(task, id, description));
  const confirmTodo = (done, id) => dispatch(confirmTask(done, id));

  function saveTodo() {
    if (formik.values.taskTitle.length > 3 && formik.values.taskTitle !== "") {
      addTodo(formik.values.taskTitle, formik.values.description);
    }
  }

  const formik = useFormik({
    initialValues: {
      taskTitle: "",
      description: "",
    },
    validate: function (values) {
      const errors = {};

      if (values.taskTitle.length < 4) {
        errors.taskTitle = "Por favor, insira uma tarefa valido!";
      }

      return errors;
    },
  });

  return (
    <Container>
      <ContentTodoRegister>
        <TitleTodo>Bem vindo!</TitleTodo>
        <SubTitleTodo>Criar uma nova tarefa</SubTitleTodo>
        <InputTodo
          id="taskTitle"
          name="taskTitle"
          maxLength="40"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.taskTitle}
          placeholder="Coloque uma tarefa"
        />
        {formik.touched.taskTitle && formik.errors.taskTitle && (
          <FormFielderror>{formik.errors.taskTitle}</FormFielderror>
        )}
        <InputDescription
          id="description"
          name="description"
          maxLength="52"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder="Coloque uma descrição"
        />
        <ButtonAddTask onClick={saveTodo}>Adicionar</ButtonAddTask>
      </ContentTodoRegister>
      <ListTodo>
        {tasks.map((task) => {
          return (
            <TodoItem
              taskId={task.id}
              task={task.task}
              description={task.description}
              done={task.done}
              editTask={editTodo}
              removeTask={excludeTodo}
              confirmTask={confirmTodo}
            />
          );
        })}
      </ListTodo>
    </Container>
  );
}
