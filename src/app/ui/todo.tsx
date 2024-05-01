/** @format */
'use client';

import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';
import CustomInput from '../ui/Input/';
import Button from './Button/Button';
import { addTodo, deleteTodo, todoList } from '../lib/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const { todos } = useSelector(todoList);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if(userInput !== '') {
    dispatch(addTodo(userInput));
    setUserInput('')
    }
  };

  const handleRemove = (id: any) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className='flex aligne-center justify-center py-12'>
        <CustomInput
          onChange={(e: any) => handleChange(e)}
          placeholder={'Enter value'}
          value={userInput}
        />
        <Button
          children={'Add'}
          className={'px-4 '}
          onClick={handleSubmit}
        />
      </div>
      <div>
        {todos?.map(
          (
            todo: {
              id(id: any): unknown;
              text:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            },
            id: Key | null | undefined,
          ) => {
            return (
              <ul key={id}>
                <li>{todo.text}</li>
                <li>
                  <Button
                    children={'Remove'}
                    className={' '}
                    onClick={() => handleRemove(todo.id)}
                  />
                </li>
              </ul>
            );
          },
        )}
      </div>
    </>
  );
}
