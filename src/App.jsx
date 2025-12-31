import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h1 className='text-2xl font-extrabold'>No available user</h1 >

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <a href={elem.url} target='_blank' key={idx}>
        <div className='flex flex-col items-center rounded bg-white text-black overflow-hidden'>
          <img src={elem.download_url} alt="" className='h-40 w-72 object-cover rounded-t'/>
          <h3 className='text-lg'>Snapped by: <span className='font-bold'>{elem.author}</span></h3>
        </div>
      </a>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white absolute' >
      <h1 className='text-center text-6xl leading-10 py-10 font-bold'>ARTIST'S GALLARY</h1>
      <div className='flex flex-wrap gap-5 justify-center  py-15 '>
        {printUserData}
      </div>
      <div className='flex w-full justify-center gap-20 bottom-0 px-10 items-center relative'>
        <button 
        className='bg-white text-black text-2xl py-3 px-6 rounded-2xl font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}
        >
          Prev
        </button>
        <p className='font-bold text-2xl'>{index}</p>
        <button 
        className='bg-white text-black text-2xl py-3 px-6 rounded-2xl font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          setIndex(index+1)
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
