import React,{useState} from "react";

import './NewGoal.css'

const NewGoal = props => {
    const [enteredText, SetEnteredText] = useState('');

    const addGoalHandler= event => {
        event.preventDefault();

        const NewGoal = {
            id: Math.random().toString(),
            text: enteredText
        }
        SetEnteredText('');
        props.onAddGoal(NewGoal);
    }
    const textChanger = event =>{
        SetEnteredText(event.target.value);
    }

    return <form className="New-Goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChanger}/>
        <button type="submit">Add NewGoal</button>
    </form>
}

export default NewGoal;