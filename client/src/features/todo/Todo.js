import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './todoSlice';
import styles from './Todo.module.css';

export function Todo() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='w-full h-full pt-4 pl-2'>
      <div className='flex flex-row mb-6 justify-between'>
        <h1 className='text-3xl'>you've got 7 task today </h1>
        <button >+Add</button>
      </div>
      <div className='h-1/4'>
        <div className='flex justify-between py-2'>
          <h3 className='text-xl'>Pending</h3>
          <div>
            <input type='text' />
            <button type='button'>Search</button>
          </div>
        </div>
        <ul>
          <li className='justify-between flex border-b pb-3'>
            <ul className='list-none inline-flex'>
              <input type='checkbox' className='m-1'/>
              <li>Indentify the implementation team</li>
            </ul>
            <span>Edit</span>
          </li>
        </ul>
      </div>

      <div>
        <div className='flex justify-between py-2'>
          <h3 className='text-xl'>Completed</h3>
          <div>
            <input type='text' />
            <button type='button'>Search</button>
          </div>
        </div>
        <ul>
          <li className='justify-between flex border-b pb-3'>
            <ul className='list-none inline-flex'>
              <input type='checkbox' className='m-1'/>
              <li>Indentify the implementation team</li>
            </ul>
            <span>Edit</span>
          </li>
        </ul>
      </div>


      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
