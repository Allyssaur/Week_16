import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/taskSlice';
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';



function Status () {
    const [checked, setChecked] = React.useState();
  //api sending to save status of Finished tasks needs work
    // const dispatch = useDispatch()

    // const onSubmit = (e) => {
    //   e.preventDefault()
      
    //   dispatch(updateTask({ taskId, checked}))
    //   setChecked(true)
    // }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    }

  return (
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
              color: red[600],
              '&.Mui-checked': {
                color: red[900],
              },
            }}
          />
      );
}

export default Status;