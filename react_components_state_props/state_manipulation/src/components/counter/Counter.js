import React from 'react';
import './counter.css'

const Counter = ({name, count, id, increaseCallback, decreaseCallback}) => {

    const increase = (id) => (event) => increaseCallback(id);
    const decrease = (id) => (event) => decreaseCallback(id);

    return (
        <div className='counter'>
            <button onClick={increase(id)}>+</button>
            <span>
                    {name}: {count}
                </span>
            <button onClick={decrease(id)}>-</button>
        </div>
    );

};
export default Counter;