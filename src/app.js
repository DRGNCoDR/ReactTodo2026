import React from 'react'

function App(){
    const completeStyle =
    {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "lightgreen",
        border: "2px dashed black",
        padding: "5px",
        margin: "5px"
    }
    const incompleteStyle =
    {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        border: "2px solid black",
        padding: "10px",
        margin: "10px"
    }

    var [todoList, setTodoList] = React.useState([])
    var [todoName, setTodoName] = React.useState("")

    const markComplete = (id) =>
    {
        setTodoList(
            prevTodos => prevTodos.map(
                currTodo => {
                    if(currTodo.id === id)
                    {
                        return {
                            ...currTodo,
                            completed: !currTodo.completed
                        }
                    }
                    return currTodo
                }
            )
        )
    }

    const addTodo = ({todoName}) =>
    {
        setTodoList(
            prevTodos => [
                ...prevTodos,
                {
                    id: Math.random(),
                    date: new Date().toString(),
                    completed: false,
                    todoText: todoName
                }
            ]
        )
        setTodoName("")
    }

    const todoListDisplay = todoList.map(
        todo => {
            return (
                <div
                    key={todo.id}
                    style={
                        todo.completed ?
                            completeStyle : incompleteStyle
                    }
                >
                    <input
                        name="todoCheckbox"
                        type="checkbox"
                        placeholder="Toggle a todo item"
                        onChange={
                            () => markComplete(todo.id)
                        }
                    />
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
                        X
                    </button>
                </div>
            )
        }
    )

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a todo item"
                value={todoName}
                onChange={e => setTodoName(e.target.value)}
            />
            <button onClick={() => addTodo({todoName})}>
                Add
            </button>
           {todoListDisplay}
        </div>
    )
}

export default App