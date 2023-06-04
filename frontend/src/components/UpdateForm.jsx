import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/taskSlice';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Status from './Checkbox';


function UpdateForm({taskId}) {

    const [task, setTask] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [checked, setChecked] = useState();

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(updateTask({ taskId, task, difficulty, checked}))
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
                    <button className="btn btn-primary" type="submit">
                        Upadate Task
                    </button>
                    {/* <button className="btn btn-primary" onClick={incrementRoll} type="submit">
                        Add Task
                    </button> */}
                    {/* button that has onClick for incrementRoll function / may not use. */}
                </div>
            </form>
        </section>
    </>
)}
export default UpdateForm;