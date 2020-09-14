import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './modules/todoItem_module';
import TodoItemData from './data/todosData'
class App extends Component {
    constructor(){
      super()
      this.state = {
        todos: TodoItemData
      }
      this.HandleCheckbox = this.HandleCheckbox.bind(this)
    }

    HandleCheckbox(id){
        this.setState(prevData =>{
            let newData = prevData.todos.map(item =>{
                    if(item.id === id){
                      return(
                        {  ...item,
                          completed : !item.completed}
                      )
                    }
                    return item
                })

                return {
                  todos : newData
                }
        })
    }
    render(){
      let data = this.state.todos.map(item =><TodoItem key={item.id} info = {item} HandleCheckbox = {this.HandleCheckbox}/>);
        return (
          <div className="App">
              {data}
          </div>
        );
    }
}

export default App;
