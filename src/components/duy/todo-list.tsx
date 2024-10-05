"use client"
import {useState} from 'react'
import {TodoItem} from './todo-item'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {PlusCircle} from "lucide-react"

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoListProps {
  initialTodos?: Todo[]
}

export default function TodoList({initialTodos = []}: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos || [])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, {id: Date.now().toString(), text: newTodo, completed: false}])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
        todo.id === id ? {...todo, text: newText} : todo
    ))
  }

  return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
        <div className="flex space-x-2 mb-6">
          <Input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="flex-grow"
          />
          <Button onClick={addTodo}>
            <PlusCircle className="h-5 w-5 mr-2"/>
            Add
          </Button>
        </div>
        <div className="space-y-4">
          {todos.map(todo => (
              <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
              />
          ))}
        </div>
      </div>
  )
}