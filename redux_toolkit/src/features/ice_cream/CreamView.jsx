import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const CreamView = () => {

    const numberCream = useSelector((state) => state.iceCream.numCream)

    const dispatch = useDispatch()

    const [first, setFirst] = useState(1)
    return (
        <div>
            <h2>Number of ice cream-{numberCream}</h2>

            <button onClick={() => dispatch(ordered())}>order ice cream</button>

            <input type="number" value={first} onChange={(e) => setFirst(parseInt(e.target.value))} />

            <button onClick={() => dispatch(restocked(first))}>restock ice cream</button>
        </div>
    )
}

export default CreamView
