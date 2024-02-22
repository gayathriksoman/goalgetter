import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './TaskTable.css';

// Define your table component
function TaskTable(props) {
  // Define tasks state
  const [tasks] = useState(props.tasks);

  // Generate rows for each task
  const rows = tasks.map((task, taskIndex) => (
    <tr key={taskIndex}>
      <td>{task.task}</td>
      {/* Generate cells for each day of the month */}
      {[...Array(29)].map((_, dayIndex) => (
        <td key={dayIndex} className={task.day.includes(dayIndex + 1) ? 'task-done' : 'task-not-done'}>
        </td>
      ))}
    </tr>
  ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tasks</th>
          {/* Generate header cells for each day of the month */}
          {[...Array(29)].map((_, index) => (
            <th key={index}>{index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default TaskTable;

