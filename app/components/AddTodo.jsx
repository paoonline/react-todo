import React from 'react'

class AddTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const todoText = this.refs.todoText.value

        if(todoText.length > 0){
            this.refs.todoText.value= '';
            
            this.props.onAddTodo(todoText);
        }else{
            this.refs.todoText.focus()
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default  AddTodo;