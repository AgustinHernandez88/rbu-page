import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [updatedTask, setUpdatedTask] = useState({ id: "", title: "", description: "", completed: false });

  useEffect(() => {
    axios.get("http://localhost:3000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.error("Error al recuperar la tarea:", error));
  }, []);

  const handleCreateTask = () => {
    axios.post("http://localhost:3000/tasks", newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask({ title: "", description: "" });
      })
      .catch((error) => console.error("Error al crear la tarea:", error));
  };

  const handleUpdateTask = () => {
    axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
      .then((response) => {
        const updatedTasks = tasks.map(task =>
          task.id === updatedTask.id ? response.data : task
        );
        setTasks(updatedTasks);
        setUpdatedTask({ id: "", title: "", description: "", completed: false });
      })
      .catch((error) => console.error("Error actualizando la tarea:", error));
  };

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch((error) => console.error("Error eliminando la tarea:", error));
  };

  return (
    <div>
      <h2>Task Manager</h2>

      <h3>Create New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleCreateTask}>Create Task</button>

      <h3>Update Task</h3>
      <input
        type="number"
        placeholder="Task ID"
        value={updatedTask.id}
        onChange={(e) => setUpdatedTask({ ...updatedTask, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="New Task Title"
        value={updatedTask.title}
        onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="New Task Description"
        value={updatedTask.description}
        onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
      />
      <label>
        Completed
        <input
          type="checkbox"
          checked={updatedTask.completed}
          onChange={(e) => setUpdatedTask({ ...updatedTask, completed: e.target.checked })}
        />
      </label>
      <button onClick={handleUpdateTask}>Update Task</button>

      <h3>Tasks List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title} - {task.completed ? "Completed" : "Not Completed"}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
