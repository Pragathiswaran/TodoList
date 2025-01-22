function editTodoList({editTodoListValue,setEditTodoListValue,updatedList}){
    return(
        <>
            <form className='flex justify-center' onSubmit={(e)=>updatedList(e)}>
                <input type='text' 
                    className="input input-bordered input-accent w-full max-w-xs rounded-r-none"
                    placeholder='Add a task' 
                    value={editTodoListValue} 
                    onChange={(e)=>{setEditTodoListValue(e.target.value)}}
                />
             <button type='submit' className="btn btn-accent rounded-l-none max-w-xs">Save</button>
          </form>
        </>
    )
}

export default editTodoList;