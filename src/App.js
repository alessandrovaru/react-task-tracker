import Header from './components/Header'
import Tasks from "./components/Tasks";
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Comer',
        date: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Merender',
        date: 'Feb 5th at 4:30pm',
        reminder: true
    },
    {
        id:3,
        text: 'Despertarme',
        date: 'Feb 5th at 8:30am',
        reminder: false
    },
    {
        id:4,
        text: 'Dormir',
        date: 'Feb 5th at 11:30pm',
        reminder: true
    },
])

  const deleteTask = (id) =>{
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Esto se parece a HTML pero es JSX
  return ( 
    <div className="container">
      <Header title='Nocion' />
      <Tasks tasks ={tasks} onDelete={deleteTask} />
    </div>
  ); 
}

export default App;
