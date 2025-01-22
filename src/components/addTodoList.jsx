const addTodoList = ({addLists,tasks,setTasks})=>{
    return(
        <>
            <form className='flex justify-center' onSubmit={(e)=>{addLists(e)}}>
                <input type='text' 
                    className="input input-bordered input-accent w-full max-w-xs rounded-r-none" 
                    placeholder='Add a task' 
                    value={tasks} 
                    onChange={(e)=>{setTasks(e.target.value)}}
                />
                <button type='submit' className="btn btn-accent rounded-l-none max-w-xs">Add</button>
            </form>
        </> 
    )
}
    
export default addTodoList;