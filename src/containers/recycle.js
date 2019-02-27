// TodoAppContainer
render() {
    console.log('props', this.props)
    return (
      <div>
        This is the todo app
        <button onClick={() => this.addTodo()}>Add todo</button>
      </div>
    )
  }
}

// TodoAppContainer
newTodoItem(e) {
    // this.props.addTodo('homework')
    console.log(e.target.value)
  }
  
// TodoAppContainer
  handleTodoItemCompletion(e) {
    e.preventDefault()
    this.setState({done: true})
    if (this.props.itemStatus === true) {
      // change style
      // style={{text-decoration: line-through}}
    } else {
      return state
    }
  }