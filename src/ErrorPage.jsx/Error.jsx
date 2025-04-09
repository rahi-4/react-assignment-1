import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Error() {
    const navigate=useNavigate();
  return (
    <div className='mt-10 text-center'>
        <h1 className='text-center font-Onest'>This Page Not Exit , Please Return The Home</h1>
        <button onClick={()=>navigate('/')} className='bg-[#F26922] py-2 px-6 rounded-[6px] font-Onest text-white'>Go Home</button>
    </div>
  )
}

export default Error