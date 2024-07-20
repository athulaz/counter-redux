import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'



function Home() {
const[amnt, setAmnt]=useState(0)

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count)


  return (
    <>
      <div className='bg-dark w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='w-50 border border-light border-3 shadow'>
          <h3 className='text-center text-danger'>Counter</h3>
          <h4 className='text-center text-white'>{count}</h4>

          <div className='d-flex justify-content-between mt-4'>
            <button className='btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-info' onClick={() => dispatch(reset())}>Reset</button>
            <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Decrement</button>
          </div>

          <div>
            <div className='p-3 mt-4'>
              <input type="text" placeholder='enter amount for increment' onChange={(e) => setAmnt(e.target.value)} className='form-control'/>
              <button className='btn btn-secondary mt-3' onClick={() => dispatch(incrementByAmount(Number(amnt)))}>incrementByAmnt</button>
            </div>


          </div>



        </div>
      </div>

    </>
  )
}

export default Home
