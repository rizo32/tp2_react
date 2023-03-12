import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
	//Global

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
		// fetchTasks();
	}, []);

	// On pourrait le laisser directement dans le useEffect, mais on est plus flexible comme ça
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    //console.log(data)
    return data
  }
  
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  }

  //Delete
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //console.log(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //ToggleReminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    //console.log(updTask)
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
    })
    const data = await res.json()
  // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:data.reminder} : task))
    // ... : on prend l'objet complet mais on inverse le reminder
  }


//Add
const addTask =  async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  //console.log(task)
  //const id = Math.floor(Math.random() * 1000)
  //const newTask = {id, ...task}
  //console.log(newTask)
  const newTask = await res.json()
  setTasks([...tasks, newTask])
}

//toggle Form

const [showAddTask, setShowAddTask] = useState(false)

  return (
    <BrowserRouter>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        { showAddTask && <AddTask onAdd={addTask}/> }
        {tasks.length > 0 ? (
          <Routes>
            <Route path="/" element={<ManyTasks tasks={tasks} onDeleteMany={deleteTask} onToggleMany={toggleReminder}/>}/>
          </Routes>
          ):(
            'No tasks'
          )}
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
