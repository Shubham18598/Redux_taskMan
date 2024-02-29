// TaskEditForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTask } from "../actions";

const TaskEditForm = ({ task, updateTask, setEditing }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, title, description, dueDate });
    setEditing(false);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Update Task</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default connect(null, { updateTask })(TaskEditForm);
