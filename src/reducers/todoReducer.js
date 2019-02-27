const initialState = {
    todos: [
        {
            task: 'homework',
            done: false
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            console.log('action:', action)
            const newTodos = state.todos.slice()
            newTodos.push({task: action.text, done: false})
            return {
                todos: newTodos
            }

        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
            // replace 'return state' and change the item via index

        default: 
            return state;
    }

    return state;
}

export default todoReducer;