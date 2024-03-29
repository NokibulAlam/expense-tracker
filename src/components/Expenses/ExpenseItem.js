import React, { useState } from 'react';
import  './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';

const ExpenseItem = (props) => {
    /* useState always return a ARRAY with 2 values. 1st--> Current state value 2nd--> Updating function  */ 
    
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // }

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;