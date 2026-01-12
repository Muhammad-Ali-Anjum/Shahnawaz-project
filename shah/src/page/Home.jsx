import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/footer'
import Khp from '../Component/Khp'

function home() {
  let name ="inam"
  const age=18
  function changename()
  {
    return "sayeed"
  }
   
  return (
  <>

  <Header/>
  <h1>change name : {changename()}</h1>
  <Khp name={name} age={age}/>
  <button onClick={()=>changename}>click me</button>
  <Footer/>
  </>
  )
}

export default home