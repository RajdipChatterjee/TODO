import React from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`flex items-center justify-between p-4 mb-4 rounded-lg shadow-md transition-all duration-300 ${
      todo.completed ? 'bg-green-50' : 'bg-white'
    }`}>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onToggle(todo._id)}
          className={`p-2 rounded-full transition-colors duration-200 ${
            todo.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
          } hover:bg-opacity-80`}
        >
          {todo.completed ? <FaCheck /> : <FaTimes />}
        </button>
        <div>
          <h3 className={`text-lg font-semibold ${
            todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
          }`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm ${
              todo.completed ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {todo.description}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(todo)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
