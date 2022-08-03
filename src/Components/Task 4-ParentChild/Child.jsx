import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ParentContext } from './Parent'

function Child() {
    const [text,setText]=useContext(ParentContext)
    return (
      <div style={{marginTop:'30px'}}>
         <Button className='btn btn-success'  onClick={()=>setText("Updated the text in Parent")} ><b>UPDATE TEXT</b></Button>
      </div>
    )
}

export default Child