import React from 'react';
import { Post } from '../../../types/post';

export const TodoList = () => {
  const postList = [
    { author: 'JM', name: 'lol' },
    { author: 'volox', name: 'asd' }
  ];

  return (
    <ul>
      {postList.map(post => (
        <li>{`${post.author} said: ${post.name}`}</li>
      ))}
    </ul>
  );
};
