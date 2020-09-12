import React from 'react'
import TodoItem from './TodoItem'
import '../css/TodoItem.css'
    function Check_box(){
        return(
            <div className ="TodoItem_Container">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
export default Check_box