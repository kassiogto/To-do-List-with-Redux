import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  addTask,
  excludeTask,
  editTask,
  confirmTask,
} from '../../store/action/todoListAction'
import { useValidation } from '../../utils/validations'
import TodoItem from '../../components/TodoItem'

import {
  Container,
  ContentTodoRegister,
  TitleTodo,
  SubTitleTodo,
  ListTodo,
  InputTodo,
  InputDescription,
  ButtonAddTask,
  FormFieldError,
} from './styles'

export default function TodoList() {
  const tasks = useSelector((state) => state.todoListReducer)
  const dispatch = useDispatch()

  const addTodo = (task, description) => dispatch(addTask(task, description))
  const excludeTodo = (id) => dispatch(excludeTask(id))
  const editTodo = (task, id, description) =>
    dispatch(editTask(task, id, description))
  const confirmTodo = (done, id) => dispatch(confirmTask(done, id))

  function saveTodo() {
    if (
      validation.values.taskTitle.length > 3 &&
      validation.values.taskTitle !== ''
    ) {
      addTodo(validation.values.taskTitle, validation.values.description)
    }
  }

  const validation = useValidation({
    initialValues: {
      taskTitle: '',
      description: '',
    },
    validate: function (values) {
      const errors = {}

      if (values.taskTitle.length < 4) {
        errors.taskTitle = 'Por favor, insira uma tarefa valido!'
      }

      return errors
    },
  })

  return (
    <Container>
      <ContentTodoRegister>
        <TitleTodo>Bem vindo!</TitleTodo>
        <SubTitleTodo>Criar uma nova tarefa</SubTitleTodo>
        <InputTodo
          id="taskTitle"
          name="taskTitle"
          maxLength="40"
          onBlur={validation.handleBlur}
          onChange={validation.handleChange}
          value={validation.values.taskTitle}
          placeholder="Coloque uma tarefa"
        />
        {validation.touched.taskTitle && validation.errors.taskTitle && (
          <FormFieldError>{validation.errors.taskTitle}</FormFieldError>
        )}
        <InputDescription
          id="description"
          name="description"
          maxLength="1000"
          onChange={validation.handleChange}
          value={validation.values.description}
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
          )
        })}
      </ListTodo>
    </Container>
  )
}
