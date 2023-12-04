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
    <div className='container mx-auto'>
      <div className='flex flex-row'>
        <h1 className='h-1'>you've got 7 task today </h1>
        <button >+Add new</button>
      </div>
      <div>
        <div>on hold</div>
        <div className='flex flex-row flex-wrap'>
          <div className='basis-1/2'>Indentify the implementation team</div>
          <div className='basis-1/6' >pending</div>
          <div className='basis-1/6'>minor</div>
          <div className='basis-1/12'><button>Edit</button></div>
        </div>
      </div>
      <div>
        <div>Completed</div>
        <div className='flex flex-row flex-wrap'>
          <div className='basis-1/2'>Indentify the implementation team</div>
          <div className='basis-1/6' >Completed</div>
          <div className='basis-1/6'>minor</div>
          <div className='basis-1/12'><button>Edit</button></div>
        </div>
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
