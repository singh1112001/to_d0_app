import React from 'react';
import './App.css'; // Default Create React App CSS
import TodoList from './Componets/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
