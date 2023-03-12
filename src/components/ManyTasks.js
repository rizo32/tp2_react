import SingleTask from './SingleTask'

const ManyTasks = ({ tasks, onDeleteMany, onToggleMany }) => {
    return(
        <>
            {tasks.map((task)=>(
                <SingleTask key={task.id} task={task} onDelete={ onDeleteMany } onToggle={ onToggleMany } />
            ))}
        </>
    )
}

export default ManyTasks