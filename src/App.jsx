
import React from "react";
import { useState } from 'react'
import './App.css'


function App({ tasks }) {

  return (
    <div>
      <h1>Liste de tâches</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App

// import React from "react"; // Utile pour le build


// function App() {

  
//   const [times, setTimes] = React.useState(0);

//   // Rendu du composant
//   return (
//     <div>

//       <h1>Liste de tache {times}</h1>
     
//       <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
//     </div>
//   )
// }

// export default App
