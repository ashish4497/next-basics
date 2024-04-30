/** @format */
'use client';
import { useDispatch, useSelector } from 'react-redux';
import Button from './ui/Button/Button';
import {
  increment,
  decrement,
  reset,
  getCount,
} from './lib/slice/counterSlice';
import HeaderNav from './ui/navBar'

export default function Home() {
  const counter = useSelector(getCount);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className='md:container md:mx-auto py-12'>
      <HeaderNav/>
      <div className='shadow text-center py-4'>
        <h2 className='text-gray-800 uppercase'>counter</h2>
        <p className='text-gray-700 capitalize my-8'>value : {counter}</p>
      </div>
      <div className='flex justify-between'>
        <Button
          children={'Increment Count by +1'}
          onClick={handleIncrement}
          className={'m-8'}
        />
        <Button
          children={'Reset value by 0 '}
          onClick={handleReset}
          className={'m-8'}
        />
        <Button
          children={'Decrement Count by -1'}
          onClick={handleDecrement}
          className={'m-8'}
        />
      </div>
    </div>
  );
}
