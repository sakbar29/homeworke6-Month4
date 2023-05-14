import React, { useState } from 'react';

function TodoItem({ task, handleDelete }) {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            handleDelete={() => handleDeleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
