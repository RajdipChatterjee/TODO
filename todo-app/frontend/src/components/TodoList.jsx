import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/api';
import { FaPlus } from 'react-icons/fa';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all'); // all, active, completed

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      toast.error('Failed to fetch todos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const response = await createTodo(todoData);
      setTodos([response.data, ...todos]);
      toast.success('Todo added successfully');
      setShowForm(false);
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  const handleUpdateTodo = async (todoData) => {
    try {
      const response = await updateTodo(editingTodo._id, todoData);
      setTodos(todos.map(todo => 
        todo._id === editingTodo._id ? response.data : todo
      ));
      toast.success('Todo updated successfully');
      setEditingTodo(null);
      setShowForm(false);
    } catch (error) {
      toast.error('Failed to update todo');
    }
  };

  const handleToggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    try {
      const response = await updateTodo(id, { completed: !todo.completed });
      setTodos(todos.map(t => 
        t._id === id ? response.data : t
      ));
    } catch (error) {
      toast.error('Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
      toast.success('Todo deleted successfully');
    } catch (error) {
      toast.error('Failed to delete todo');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <FaPlus />
          <span>Add Todo</span>
        </button>
      </div>

      {showForm && (
        <TodoForm
          onSubmit={editingTodo ? handleUpdateTodo : handleAddTodo}
          initialData={editingTodo}
        />
      )}

      <div className="flex space-x-2 mb-4">
        {['all', 'active', 'completed'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg capitalize ${
              filter === filterType
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No todos found</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={handleToggleTodo}
              onEdit={() => {
                setEditingTodo(todo);
                setShowForm(true);
              }}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
