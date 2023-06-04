import React from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import TaskTable from './TaskTable';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'rgb(188, 71, 64)',
  },
  '& .MuiRating-iconHover': {
    color: '#ff6d75',
  }
});

function StarRating(task) {
  const [setDifficulty] = React.useState('');

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="simple-controlled"
        value={task.difficulty}
        readOnly
      />
    </Box>
  );
}

export default StarRating;

//not currently editable or able to send to API