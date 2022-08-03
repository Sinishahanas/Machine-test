import React, {createContext, useState} from 'react'
import Child from './Child'
const ParentContext=createContext({})

function Parent() {
    const [text,setText]=useState("I need to be updated from my child");
  return (
    <div>
        <h1 className='heading' style={{marginTop:'50px'}}>{text}</h1>
    
    <ParentContext.Provider value={[text,setText]}>
    <Child/>
    </ParentContext.Provider>
    </div>
  )
}

export default Parent
export {ParentContext};