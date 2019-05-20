import React from 'react';
import { TodoList } from '../components/TodoList/TodoList';
import { NewTodoElement } from '../components/NewTodoElement/NewTodoElement';

export const TodoContainer = () => {
  return (
    <>
      <TodoList />
      <NewTodoElement />
    </>
  );
};
