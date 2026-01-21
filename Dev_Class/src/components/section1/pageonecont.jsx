import React from 'react'
import Leftcontent from './Leftcontent'
import Pageright from './Pageright'
function pageonecont() {
  return (
     <div className='py-10 h-[90vh]  flex gap-10 items-center px-18 bg-amber-900'>
        <Leftcontent/>
        <Pageright/>
    </div>
  )
}

export default pageonecont