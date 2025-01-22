import {React, useState} from 'react';
import SaveForm from './components/addTodoList';
import EditForm from './components/editTodoList';
import ListTodo from './components/listTodo';
import {toast} from 'react-toastify';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [task, setTask] = useState('');
  const [todolist, setTodolist,removeItem,updateItem] = useLocalStorage("todolist",[]);
  const [editTodoList, setEditToDoList] = useState(false);
  const [editTodoListValue, setEditTodoListValue] = useState('');
  const [editTodoListIndex,setEditTodoListIndex] = useState('');

  const timeDate = ()=>{
    const date = new Date();
    const time$date = date.toLocaleString('en-ID').split(',')
    return `${time$date}`
  }

  const addList = (e)=>{
    e.preventDefault();
    if(task === ''){
      toast.error('Please enter a task');
    } else {
      const updateTodoList = [...todolist,{'task':task, 'create':timeDate()}]
      setTodolist(updateTodoList);
      setTask('');
    }
  }

  const deleteList = (index)=>{
    removeItem(index)
  }

  const editList =(index, item)=>{
    setEditTodoListValue(item.task);
    setEditTodoListIndex(index);
    setEditToDoList(true)
  }

  const updatedList = (e)=>{
    e.preventDefault()
    updateItem(editTodoListIndex,editTodoListValue)
    setEditToDoList(false)
    setEditTodoListValue('')
    setEditTodoListIndex('')
  }
 
 
  return (
    <>
    <div className='flex justify-center font-mono mt-14'>
      <div className='border-2 w-1/2 py-16 border-accent max-h-full'>
      <h1 className='text-center text-4xl mb-20'>Todo List</h1>
      {!editTodoList &&
        <SaveForm addLists={addList} tasks={task} setTasks={setTask}/>
      }
      {editTodoList &&
        <EditForm updatedList={updatedList} editTodoListValue={editTodoListValue} setEditTodoListValue={setEditTodoListValue}
        />
      }
      <ul className='ml-auto mr-auto w-3/4 mt-10 max-h-72 overflow-hidden overflow-y-scroll scrollbar-hide scroll-smooth'>
        <ListTodo todolist={todolist} editList={editList} deleteList={deleteList}/>
      </ul>
      </div> 
    </div>

    </>

  );
}


export default App;
