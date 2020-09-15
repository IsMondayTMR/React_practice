import React from 'react'
import '../css/TodoItem.css'
// class todoItem extends Component {
//     render(){
//         return(
//             <div>
//                 <input type = "checkbox" checked = "true"/>
//                 <p>checkbox</p>
//                 <hr/>
//             </div>
//         )
//     }
// }

function TodoItem(props){

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
        return(
            <div className="todo-item">
                <input 
                type = "checkbox" 
                checked = {props.info.completed} 
                className = "checkbox" 
                onChange = {() => props.HandleCheckbox(props.info.id)}
                />
                <label style = {props.info.completed ? completedStyle : null} >{props.info.text}</label>
                <hr/>
            </div>
        )
    }

export default TodoItem