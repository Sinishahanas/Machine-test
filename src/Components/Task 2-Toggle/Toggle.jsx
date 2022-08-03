import React, {useState} from 'react'
import './Toggle.css'

function Toggle() {
    const [show,setShow]=useState(true);
  return (
    <div className='main'>
       <div className='submain'>
        {
            show===true?<div className='sub-text'><h1 className='demo'>Toggled</h1></div>:<div className='new'><h1 className='demo' ></h1></div>
        }
        </div>
        <div className='but'>
        <button  className={show===true?"btn btn-success mt-5":"btn btn-danger mt-5"} onClick={()=>setShow((status)=>!status)} >{show===true?"Hide":"Show"}</button>
        </div>
    </div>
  )
}

export default Toggle