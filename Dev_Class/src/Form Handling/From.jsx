import React, { useState } from 'react'

function From() {
  const [name, setname] = useState("");
  const [subname, setSubmittedName] = useState("");
 
  const submitCahge=(e)=>{
    e.preventDefault();
    console.log("Form submitted",e.target[0].value);
    setSubmittedName(name)
    setname("");
  }
  return (
    <div>
      <h1 className='text-3xl'>Form Component</h1>
      <form onSubmit={submitCahge} className='flex flex-col w-1/3 m-5 p-5'>
        <input type="text" 
        placeholder='Enter something'
        className='border-2'
        value={name}
        onChange={(elm)=>setname(elm.target.value)}
        />
        <button className='bg-blue-500 text-white p-2 m-2 rounded'>Submit</button>

      </form>
      <h1 className='text-2xl'>You Entered : {subname}</h1>
    </div>
  )
}

export default From