import React from 'react';
import { Toaster } from 'react-hot-toast';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-blue-600">MERN Todo App</h1>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        <TodoList />
      </main>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4CAF50',
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: '#F44336',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
