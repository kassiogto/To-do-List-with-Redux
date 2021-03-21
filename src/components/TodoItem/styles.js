import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 600px auto;
  min-height: calc(1.5em + 0.75rem + 40px);
  height: auto;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  border: 1px solid var(--color-text-complement);
  border-radius: 0.25rem;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div {
    height: 100%;
  }

  div span {
    width: 100%;
    height: 100%;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .fa-calendar-check,
  .fa-calendar-times {
    margin-top: 15px;
    margin-left: 15px;
    border: none;
    background-color: transparent;
    color: var(--color-primary-dark);
    font-size: 24px;
    cursor: pointer;

    :hover {
      color: var(--color-primary-lighter);
    }
  }
`;

export const ContentTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;

  .task {
    color: var(--color-text-title);
    font-size: 18px;
    font-weight: bolder;
  }

  .description {
    color: var(--color-text-title);
    font-size: 14px;
  }
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ButtonEdit = styled.button`
  border: none;
  margin: 15px 0 15px 15px;
  background-color: transparent;
  cursor: pointer;

  i {
    font-size: 24px;
    color: var(--color-primary-dark);
  }
  i:hover {
    color: var(--color-primary-lighter);
  }
`;

export const ButtonExclude = styled.button`
  border: none;
  margin: 5px 10px;
  background-color: transparent;
  cursor: pointer;

  i {
    font-size: 24px;
    color: var(--color-primary-dark);
  }
  i:hover {
    color: var(--color-text-error);
  }
`;

export const InputEdit = styled.input`
  height: 30px;
  border: 1px solid var(--color-text-complement);
  border-radius: 5px;
  padding-left: 5px;
  margin: 5px;
  margin-left: 15px;
  font-size: 14px;
`;

export const ButtonAddTask = styled.button`
  height: 50px;
  padding: 10px 40px;
  background: var(--color-primary-dark);
  border: 1px solid var(--color-text-complement);
  border-radius: 5px;
  cursor: pointer;
`;
