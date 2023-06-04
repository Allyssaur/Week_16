import StarRating from './StarRating';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import UpdateModal from './UpdateModal';
import Status from './Checkbox';

function TaskItem({ task }) {
    
    const dispatch = useDispatch();

    return( 
        <>
        <tr>
            <td className={task.roll}>{task.roll}</td>
            <td>{task.task}</td>
            <td><StarRating difficulty={task.difficulty}/></td>
            <td>
                <div className="actions">
                    <UpdateModal taskId={task._id}/>
                    <span className="text-gradient"><i id="X" className="fas fa-times" onClick={() => dispatch(deleteTask(task._id))}></i></span>
                    <Status checked={task.checked}/>
                </div>
            </td>
        </tr>
        </>
    )
}

export default TaskItem;