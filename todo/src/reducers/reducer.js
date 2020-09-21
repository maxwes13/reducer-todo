import React, { useState, useReducer } from "react";


export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: 1234
                }];

        case "TOGGLE":
            let Clickedtoggle =
              state.map(item => {
                if (item.id === action.payload) {
                return {
                 ...item,
                 completed: !item.completed
                  }
                } else {
                 return item;
                 }
                 });
                 return Clickedtoggle;
                       
          case "CLEAR_TODO":
            let Clear =
            state.filter(item => {
             if (item.completed === true) {
                 return !item.completed
             }else{
                 return item
             }
           }
         )
         return Clear;           
  
      default:
              return state;

    }
}