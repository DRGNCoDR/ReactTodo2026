import React from 'react';

function App(){

    const initialList = [
        {
            id: Math.random(),
            date:  new Date().toString(),
            completed: false,
            todoText: "Learn React"
        },
        {
            id: Math.random(),
            date:  new Date().toString(),
            completed: false,
            todoText: "Learn test"
        }
    ]

    var [todoList, setTodoList] = React.useState(initialList)

    const todoListDisplay = todoList.map(todo => {
        return (
            <div key={todo.id} style={
                    {
                        border: "2px solid black",
                        padding: "10px",
                        margin: "10px"
                    }
                }
            >
                <input type="checkbox" placeholder="Toggle a todo item" />

                <p>{todo.todoText}</p>

                {/*consider better names for arrow variables*/}
                <button
                    onClick={
                        () => setTodoList(
                            prevTodos => prevTodos.filter(
                                currTodo => currTodo.id !== todo.id
                            )
                        )
                    }
                >
                    Delete
                </button>
            </div>
        )
    })

    return (
        <div>
           <input type="text" placeholder="Enter a todo item" />
           <button>Add</button>
           {todoListDisplay}
        </div>
    )
}

export default App;