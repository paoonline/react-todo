import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            showCompleted: false,
            searchText: '',
          todos:[
              {
                id: 1,
                text: 'Walk the dog'
              },
              {
                id: 2,
                text: 'Clean the yard'
              },
              {
                id: 3,
                text: 'Leave mail on porch'
              },
              {
                  id:4,
                  text: 'Play video games'
              }
          ]
        }
    }
    handleAddTodo = (texts) => {
        alert(' new todo: ' + texts)    
    }
    handleSearch = (showCompleted, searchText)=> {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }
    render(){
        const {todos} = this.state
        return(
            <div>
                <TodoSearch  onSearch={this.handleSeach}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

export default  TodoApp