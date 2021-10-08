import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  // const name = "Victor";
  // const x = true;

  //Delete Tsdk
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Remainder
  const toggleRemainder = (id) => {
   setTasks(tasks)
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        "No task to show"
      )}
      {/* <Header title='Hello'/> */}
      {/* <Header title={1}/>  Thus will give invalid prop title number*/}
      {/* <h2>Hello {name}</h2>
      <h3>Hello {x ? 'Yes' : 'No'}</h3> */}
    </div>
  );
};

export default App;
