import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/reducer"



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTitle, setNewTitle,] = useState('');

    const handleChanges = e => {
        setNewTitle(e.target.value);
    };

    return (

        <div>
            <h1>All The Todo's</h1>
            {state.map(state => {
                return(
                    <div onClick = {() => {
                    dispatch({ type: "TOGGLE", payload: state.id })
                 }} >
                    {state.item}
                    </div>
                )
        }
                )}

        <input
                className="Input"
                type="text"
                name="newTitleText"
                value={newTitle}
                onChange={handleChanges}
        />

                <button onClick={() => { dispatch({ type: "ADD_TODO", payload: newTitle }); }}>
                Add Item
                </button>


                <button onClick={() => { dispatch({ type: "CLEAR_TODO", payload: newTitle }) }}>
                Clear Completed
                </button>
            
    </div>
    )
    };


export default TodoList;