import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* When we output map in jsx it is caled a list */}
      {tasks.map((task, index) => (
        <Task
          // key={task.id}
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
