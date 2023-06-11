import Table from 'react-bootstrap/Table';
import FormModal from './FormModal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, reset } from '../features/tasks/taskSlice';
import TaskItem from '../components/TaskItem';
import Task1 from '../components/Task1';
import Task13 from '../components/Task13';
import Task20 from '../components/Task20';

function TaskTable() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  )

  useEffect(() => {
      if(isError) {
          console.log(message)
      }

      if(!user) {
          navigate('/login')
      }

      dispatch(getTasks())

      return () => {
          dispatch(reset())
      }
      
  }, [])

  return (
      <><div className="intro">
      <p>Good day, Traveler!  Nice of you to join us.  Are you also here for an adventure?  The path ahead holds many challenges but we have faith in ye.
        To get started be sure to read over the rules that we follow around these, here, parts.  They'll be mighty important on your quest.  After giving
        those a wee peek, you must then add yer tasks.  These task will be your weapons against what lies ahead so don't be skimpin' out on them!  Well,
        go on now.  Go ahead and add some tasks!  Don't be shy.</p>
    </div><Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Task</th>
            <th>Difficulty</th>
            {/* <th>Value</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            <Task1 />
          ) : (<h5>You do not currently have any tasks!</h5>)}

          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}

          {/* {tasks.length > 13 ? (
<Task13 />
) : (<p>Keep Adding Tasks!</p>) } */}
          {/* <Task13 />
<Task20 /> */}
        </tbody>
      </Table><div className="mb-2">
        <FormModal />
      </div></>
  );
}

//Value will be based on difficulty in the future...will be reactive with Enemey Health when implemented
export default TaskTable;