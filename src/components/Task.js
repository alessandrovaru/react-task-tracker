import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
    return (
        <div className='tasks'>
            <h3>{task.text} 
                <FaTimes 
                onClick={()=>onDelete(task.id)} 
                className='x-icon' />
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
