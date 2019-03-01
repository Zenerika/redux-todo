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
            const newTodos = state.todos.slice()
            newTodos.push({task: action.text, done: false})
            return {
                todos: newTodos
            }

        case 'TOGGLE_TODO':
            const doneTodos = state.todos.slice()
            doneTodos[action.index].done = !doneTodos[action.index].done
            return {
                todos: doneTodos
            }

        default: 
            return state;
    }
}

export default todoReducer;