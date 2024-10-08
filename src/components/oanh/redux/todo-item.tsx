import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Edit2, Trash2 } from "lucide-react";
import { useAppDispatch } from "@/redux-config/hooks";
import { todoSlices } from "@/features/todo.slices";

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
}

export function TodoItem({ id, text, completed }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(todoSlices.actions.toggleComplete(id));
    };

    const handleDelete = () => {
        dispatch(todoSlices.actions.removeTodo(id));
    };

    const handleEdit = () => {
        if (isEditing && editedText.trim()) {
            dispatch(todoSlices.actions.editTodo({ id, text: editedText }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center space-x-3 flex-grow mr-4">
                <Checkbox
                    id={`todo-${id}`}
                    checked={completed}
                    onCheckedChange={() => handleToggle()}
                    className="border-2 border-primary"
                />
                {isEditing ? (
                    <Input
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="flex-grow"
                    />
                ) : (
                    <label
                        htmlFor={`todo-${id}`}
                        className={`flex-grow text-lg ${completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                    >
                        {text}
                    </label>
                )}
            </div>
            <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={handleEdit}>
                    {isEditing ? <Check className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={handleDelete}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}