'use client'
import {useState} from 'react'
import {TodoItem} from './todo-item'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {PlusCircle} from "lucide-react"
import {useAppDispatch, useAppSelector} from "@/redux-config/hooks";
import {todoSlices} from "@/features/todo.slices";

export default function TodoList() {
    const todos = useAppSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useAppDispatch();

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(todoSlices.actions.addTodo({text: newTodo}));
            setNewTodo('');
        }
    }


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
            <div className="flex space-x-2 mb-6">
                <Input
                    type="text"
                    value={newTodo}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleAddTodo()
                        }
                    }}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="flex-grow"
                />
                <Button onClick={handleAddTodo}>
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
                    />
                ))}
            </div>
        </div>
    )
}