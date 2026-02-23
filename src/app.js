import React from 'react';

function App(){

    const initialTodoList = [
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

    var [todoList, setTodoList] = React.useState(initialTodoList)

    const list = todoList.map((item) => {
        return (
            <div key={item.id} style={
                    {
                        border: "2px solid black",
                        padding: "10px",
                        margin: "10px"
                    }
                }
            >
                <input type="checkbox" placeholder="Toggle a todo item" />
                <p>{item.todoText}</p>

                <button
                    onClick={
                        () => setTodoList(
                            prev => prev.filter(
                                i => i.id !== item.id
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
           {list}
        </div>
    )
}

export default App;