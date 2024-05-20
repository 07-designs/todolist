"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]); //keeping empty array because using maintask we are going to store the list of works we are going to do
  
  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}]);
    console.log(mainTask)
    settitle("");
    setdesc("") 
  }
  let rendertask=<h3>No task</h3>;
  const deletehandler=(i)=>{
     let copy=[...mainTask];
     copy.splice(i,1);
     setmainTask(copy);
  }

 if(mainTask.length>0){
  rendertask=mainTask.map((t,i)=>{
    return (
      <li className="flex justify-between mb-5 ">
        <div className='flex justify-between mb-5 w-1/3'>
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-semibold">{t.desc}</h6>
        </div>
      <button className='bg-red-800 font-bold py-1 px-2 rounded mb-6'
      onClick={()=>{
        deletehandler(i)
      }}
      >Delete</button>
      </li>
    )
})
 }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Jeet's todo list</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
      placeholder='Enter your task here'
      value={title}
      onChange={(e)=>{
       settitle(e.target.value)
      }}
      />
   

    
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
    


<button id="myButton" className="bg-blue-800 hover:bg-black text-white font-bold py-2 px-4 rounded">
  Click me
</button>

       </form>
    <hr/>
    <div className='bg-slate-200 p-8 text-black'>
      {rendertask}
    </div>

    
    </>
  )
}

export default page