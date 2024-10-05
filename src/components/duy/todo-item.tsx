import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2, Edit2, Check } from "lucide-react"

interface TodoItemProps {
  id: string
  text: string
  completed: boolean
}

export function TodoItem({ id, text, completed }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)

  const handleToggle = () => {
  }

  const handleDelete = () => {
  }

  const handleEdit = () => {
    if (isEditing) {
    }
    setIsEditing(!isEditing)
  }

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
          <Button variant="outline" size="icon" onClick={() => handleDelete()}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
  )
}