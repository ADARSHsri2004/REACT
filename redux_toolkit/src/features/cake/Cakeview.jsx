import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

//importing actions
import {ordered,restocked }from './cakeSlice'

const Cakeview = () => {
  const numberCake=  useSelector((state) => state.cake.numCakes)

  const dispath=useDispatch()
  
  return (
    <div>
      <h2>Number of cakes-{numberCake}</h2>
      <button onClick={() => dispath(ordered())}>order cakes</button>
      <button onClick={() => dispath(restocked(5))}>restock cakes</button>
    </div>
  )
}

export default Cakeview
