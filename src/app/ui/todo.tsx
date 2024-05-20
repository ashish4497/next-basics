/** @format */
'use client';

import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from 'react';
import CustomInput from '../ui/Input/';
import Button from './Button/Button';
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoList,
} from '../lib/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {
  const [userInput, setUserInput] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();

  const { todos } = useSelector(todoList);


  const handleChange = (e: any) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleEditChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditText(e.target.value);
  };

  const handleRemove = async (id: any) => {
    await dispatch(deleteTodo(id));
  };

  const handleEdit = (todo: { id: any; text: any }) => {
    const { id, text } = todo;
    setIsEdit(id);
    setEditText(text);
    console.log(todo,"sds")
    console.log(todos,"todos");

  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {  
    e.preventDefault();
    if (isEdit) {
      await dispatch(editTodo({ id: isEdit, text: editText }));
      setIsEdit(false);
    } else {
      if (userInput.trim() !== '') {
        await dispatch(addTodo(userInput));
        setUserInput('');
      }
    }
  };

  return (
    <>
      <div className='flex aligne-center justify-center py-12'>
        {isEdit ? (
          <CustomInput
            onChange={(e: any) => handleEditChange(e)}
            placeholder={'Enter value'}
            value={editText}
          />
        ) : (
          <CustomInput
            onChange={(e: any) => handleChange(e)}
            placeholder={'Enter value'}
            value={userInput}
          />
        )}

        <Button
          children={'Add'}
          className={'px-4 '}
          onClick={(e: any) => handleSubmit(e)}
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
              <ul
                key={id}
                className='flex justify-center '>
                <li>{todo.text}</li>
                <li
                  
                  className='ml-10 cursor-pointer ont-black'>
                  <span className='material-symbols-outlined' onClick={() => handleRemove(todo.id)}>delete</span>
                  <span
                    className='material-symbols-outlined ml-6'
                    onClick={() => handleEdit(todo)}>
                    edit
                  </span>
                </li>
              </ul>
            );
          },
        )}
      </div>
    </>
  );
}
