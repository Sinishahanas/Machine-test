import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaCheckCircle, FaBars } from "react-icons/fa";
import {Routes,Route} from 'react-router-dom'
import Input from "../Input/Input"
import Toggle from "../Task 2-Toggle/Toggle"

import './Sidebar.css'
import View from '../Task 1-Pagination/View';
import Parent from '../Task 4-ParentChild/Parent';

function Sidebar({demo}) {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen);
    const items=[
        {
            path:'/pagination',
            name:'Pagination',
            icon:<FaCheckCircle/>
        },
        {
            path:'/toggle',
            name:'Toggle',
            icon:<FaCheckCircle/>
        },
        {
            path:'/input',
            name:'Input',
            icon:<FaCheckCircle/>
        },
        {
            path:'/parentChild',
            name:'ParentChild',
            icon:<FaCheckCircle/>
        }
    ]
  return (
    <div className='container1'>
        <div className='sidebar' style={{width:isOpen ? "300px" : "50px"}}>
            <div className='headers'>
                <h1 style={{display: isOpen ? "block" : "none"}} className='logos'>Machine Test</h1>
                <div style={{marginLeft: isOpen ? "50px" : "10px"}} className='bars'>
                    <FaBars onClick={toggle} style={{color:'white'}}/>
                </div>
            </div>
            {
                items.map((item,index)=>(
                    <Link to={item.path} key={index} className="link" activeclassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>
                    </Link>
                ))
            }
        </div>
            {/* <h1 className="hclass">MACHINE TEST</h1>
        <main>{demo}</main> */}

        <Routes>
      <Route path='/pagination' element={<View/>}/>
      <Route path='/input' element={<Input/>}/>
      <Route path='/toggle' element={<Toggle/>}/>
      <Route path='/parentChild' element={<Parent/>}/>
      </Routes>

    </div>
  )
}

export default Sidebar