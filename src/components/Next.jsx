import React from 'react'

const Next = () => {
  return (
    <div>
      <button 
        className='bg-white text-black text-2xl py-3 px-6 rounded-2xl font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >
          Next
        </button>
    </div>
  )
}

export default Next
