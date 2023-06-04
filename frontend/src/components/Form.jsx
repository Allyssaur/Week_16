import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import StarRating from './StarRating';

function Form() {
    const [roll, setRoll] = useState(2);
    const [task, setTask] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [checked, setChecked] = useState('false');

    //adds ability to increment the roll number everytime a task is recieved
    //this method of going about this causes a small bug when a task is deleted, it does not allow a task to be updated in that spot, therefore skipping the deleted number's roll.  Needs a fix at later date.
    const incrementRoll = () => {
        if(!task){
            setRoll(roll)
        } else {
        setRoll(roll + 1)
        }
    }
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        incrementRoll(roll)

        dispatch(createTask({ roll, task, difficulty, checked}))
        setTask('')
    }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: 'rgb(188, 71, 64)',
        },
        '& .MuiRating-iconHover': {
          color: '#ff6d75',
        }
      })

    return (
    <>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label 
                        htmlFor="task" 
                        className="text-light">
                            Task
                    </label>
                    <input type="hidden" name='roll' value={roll} />
                    <input 
                        type="text" 
                        name="task" 
                        value={task} 
                        id="task"
                        placeholder="i.e. Do Laundry Rotation" 
                        onChange={(e) => setTask(e.target.value)} />
                </div>
{/* fix star rating functionality, add ability to send difficulty rating to api  */}
                <div className="form-group">
                    <label
                        htmlFor="star-rating"
                        className="text-light">
                            Difficulty
                    </label>
                    <Box
                        sx={{
                        '& > legend': { mt: 2 },
                    }}>
                    <StyledRating
                        name="simple-controlled"
                        value={difficulty}
                        onChange={(event, newValue) => {
                        setDifficulty(newValue);
                        }}/>
                    </Box>
                </div>
                <div className="form-group">
                    <input 
                        type="hidden" 
                        id="checked" 
                        name="checked" 
                        value={checked}
                        onChange={(e) => setChecked(e.target.value)} />
                </div>
                <div className="form-group">
                    {/* <button className="btn btn-primary" type="submit">
                        Add Task
                    </button> */}
                    <button className="btn btn-primary"  type="submit">
                        Add Task
                    </button>
                    {/* button that has onClick for incrementRoll function / may not use. */}
                </div>
            </form>
        </section>
    </>
)}
export default Form;

//add functionality for Rolls, 1, 13, and 20 as preemptive and preset tasks