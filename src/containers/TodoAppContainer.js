import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/TodoApp.css';

class TodoAppContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoItem: '',
       done: false
    }
  }
  
  handleChangeTodoItem(e) {
    e.preventDefault()
    this.setState({todoItem: e.target.value})
  }

  handleSubmitNewTodo(e) {
    e.preventDefault()
    this.props.addTodo(this.state.todoItem)
  }
  
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">

          <div className="box m-auto">

            <h4 className="title is-4">My ToDo List</h4>

            <form onSubmit={(e) => this.handleSubmitNewTodo(e)}>
              <div className="field has-addons">
                <div className="control">
                  <input className="input" 
                         type="text" 
                         placeholder="Add a todo item..." 
                         onChange={(e) => this.handleChangeTodoItem(e)}
                         value={this.props.todos.task} />
                </div>
                <div className="control">
                  <button className="button is-primary" 
                          type="submit">Add</button>
                </div>
              </div>
            </form>

            <div className="content">
              <ul>
                {this.props.todos.map((item, index) => <li onClick={() => this.props.toggleTodo(index)} style={{textDecoration: item.done ? 'line-through': null}}>{item.task}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText}),
  toggleTodo: (index) => dispatch({type: 'TOGGLE_TODO', index: index }) 
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer)
