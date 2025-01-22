import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { cyan } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const listTodo = ({ todolist, editList, deleteList }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [style, setStyle] = useState('no-underline');
  const [styleIndex, setStyleIndex] = useState('');
  const [visibility, setVisibility] = useState(todolist.map(() => 'hidden'));

  const theme = createTheme({
    palette: {
      secondary: {
        main: cyan[50]
      },
    },
  });

  const changeStyle = (index) => {
    setStyleIndex(index);
    setStyle((prevStyle) => (prevStyle === 'no-underline' ? 'text-red-600 line-through decoration-red-50' : 'no-underline'));
  };

  const displayTime = (index) => {
        setVisibility((prevVisibility) => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = newVisibility[index] === 'hidden' ? 'block' : 'hidden';
            return newVisibility;
        });
   
  };
  return (
    <>
      {todolist.map((item, index) => (
        <div key={index} className="flex justify-between bg-slate-600 mt-3">
          <div className="flex justify-around w-3/4">
            <div className="mt-auto mb-auto w-2">
              <Checkbox {...label} size="small" onClick={() => changeStyle(index)} />
            </div>
            <li className="mt-auto mb-auto w-4/5">
              <span className={`mt-auto mb-auto text-wrap ${index === styleIndex ? style : ''}`}>{item.task}</span>
            </li>
          </div>
          <div className="flex justify-end mr-2 gap-2 mt-auto mb-auto">
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton aria-label="edit" color='success' onClick={() => editList(index, item)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" color='error' onClick={() => deleteList(index)}>
                <DeleteIcon />
              </IconButton>
              <ThemeProvider theme={theme}>
                <IconButton color='secondary' onMouseEnter={() => displayTime(index)}>
                  <AccessTimeFilledIcon />
                </IconButton>
              </ThemeProvider>
            </Stack>
            <div className={`text-sm w-full border-2 ${visibility[index]}`}>{item.create}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default listTodo;
