import React from 'react'

const Prev = () => {
  return (
    <div>
      <button 
        className='bg-white text-black text-2xl py-3 px-6 rounded-2xl font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
    </div>
  )
}

export default Prev
