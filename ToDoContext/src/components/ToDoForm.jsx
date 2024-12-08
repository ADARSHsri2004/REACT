import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';
function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

 
  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false})
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" value={todo} onChange={(e) => setTodo(e.target.value)}

      // Event Handler:
      // The inline function (e) => setTodo(e.target.value) is executed:
      // e.target refers to the input element where the change occurred.
      // e.target.value gets the current value of the input field.
      // setTodo(e.target.value) updates the todo state with this value.

      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

