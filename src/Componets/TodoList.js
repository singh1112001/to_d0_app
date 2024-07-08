import React, { useState } from "react";
import "./TodoList.css"; // Importing CSS file for styling

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setItems([...items, { id: Date.now(), text, completed: false }]);
      setText("");
    }
  };

  const markComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            {item.text}
            <div>
              <button onClick={() => markComplete(item.id)}>
                {item.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
