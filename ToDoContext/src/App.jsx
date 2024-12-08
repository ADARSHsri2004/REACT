import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    // ...todo =Spreading the properties of the todo object (e.g., title, description) into this new object.

    // ...prev =Spreading the contents of the previous todos array into the new array, keeping the existing to-do items.
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => { prev.map((prevTodo) => { prevTodo.id === id ? todo : prevTodo }) })
    //  The setTodos function is called to update the todos state. It takes a callback function with prev as the current state (array of todos).

    // The .map() function iterates over each to-do item (prevTodo) in the array.
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => { todo.id !== id }))

    //     .filter() iterates over each item (todo) in the prev array:
    // For each item, it evaluates todo.id !== id:
    // If true, the item is kept in the new array.
    // If false, the item is excluded.

  }
  const toggleComplete = (id) => {
    setTodos((prev => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))

    //     If prevTodo.id === id is true, a new object is created using the spread operator ({ ...prevTodo }), with the completed property flipped (!prevTodo.completed).
    // If the condition is false, the existing prevTodo is returned unchanged.
    // .map():
    // Creates a new array where only the matching prevTodo has its completed status toggled, leaving other items intact.
  }

  //local storage


  //This code ensures that any to-do items previously saved in localStorage are loaded and set as the initial state of the todos list when the component is first rendered.
  useEffect(() => {
    //  JSON.parse(localStorage.getItem("todos")):

    // Converts the string retrieved from localStorage back into a JavaScript object or array. Data in localStorage is always stored as a string, so JSON.parse is necessary to transform it into a usable format.

    const todos = JSON.parse(localStorage.getItem("todos"))

    //     if (todos && todos.length > 0):
    // Ensures the retrieved data exists (todos is not null) and that it’s a non-empty array (todos.length > 0). This guards against errors when localStorage is empty or the "todos" key does not exist.

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  //Synchronizes the todos state with localStorage so that the data is saved and can be reloaded later, even if the page is refreshed or the browser is closed.
  useEffect(() => {
    //     JSON.stringify(todos):
    // Converts the todos array into a JSON string because localStorage can only store strings.

    //     Saves the JSON string in localStorage with the key "todos".
    // This ensures that the current state of todos is persisted in the browser's local storage.
    localStorage.setItem("todos", JSON.stringify(todos))

    //The dependency array [todos] means this effect will run every time the todos state changes.
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
