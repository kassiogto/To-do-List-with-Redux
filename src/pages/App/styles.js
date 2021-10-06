import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  margin-right: auto;
  margin-left: auto;
`

export const ContentTodoRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px 30px 20px;
  width: 600px;
  border: 1px solid var(--color-text-complement);
  border-radius: 5px;
  background: var(--color-box-footer);
  margin-bottom: 20px;

  button:hover {
    background-color: var(--color-primary-lighter);
  }
`

export const TitleTodo = styled.h3`
  font-size: 23px;
  margin: 7px;
  color: var(--color-text-title);
  font-weight: 500;
  line-height: 1.2;
`

export const SubTitleTodo = styled.p`
  font-size: 18px;
  color: var(--color-text-title);
  margin-block-start: 1rem;
  margin-block-end: 0.8rem;
`

export const ListTodo = styled.div`
  width: 100%;
  height: 100%;
`

export const InputTodo = styled.input`
  width: 50%;
  height: 35px;
  padding: 6px;
  margin-top: 10px;
  font-size: 14px;
  border: 1px solid var(--color-text-complement);
  border-radius: 5px;
  color: var(--color-text-title);
`

export const InputDescription = styled.textarea`
  width: 50%;
  height: 70px;
  padding: 6px;
  margin: 17px 0 10px 0;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid var(--color-text-complement);
  color: var(--color-text-title);
`

export const ButtonAddTask = styled.button`
  padding: 10px 40px;
  background: var(--color-primary-dark);
  border: 1px solid var(--color-text-complement);
  border-radius: 5px;
  cursor: pointer;
`

export const FormFieldError = styled.span`
  position: absolute;
  top: 182px;
  font-size: 12px;
  color: var(--color-text-error);
`
