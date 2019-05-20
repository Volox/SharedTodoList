import React, { useRef } from 'react';
import { Post } from '../../../types/post';

export const NewTodoElement = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const createPost = (name: string, author: string): Post => {
    return { author, name };
  };

  const clickHandler = () => {
    if (inputRef.current === null) return;

    const label = inputRef.current!.value;
    if (label.trim().length > 0) {
      const post = createPost(label, 'JM');
      // do something
      console.log('Now I should post the todo to the server');
    }
  };

  return (
    <>
      <input placeholder="Remember to..." ref={inputRef} type="text" />
      <button onClick={clickHandler}>Submit</button>
    </>
  );
};
