import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export function App({ tasks }) {

  const task = ["ranger la table", "faire la vaiselle"]

  return (
    <div>
      <h1>Liste de tâches</h1>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
