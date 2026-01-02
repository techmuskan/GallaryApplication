import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'
import Prev from './components/Prev'
import Next from './components/Next'

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

  let printUserData = <h1 className='text-2xl font-extrabold'>loading ...</h1 >

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div> 
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto w-full text-white absolute' >
      <h1 className='text-center text-6xl leading-10 py-10 font-bold'>ARTIST'S GALLARY</h1>
      <div className='flex flex-wrap gap-3 justify-center  py-15 '>
        {printUserData}
      </div>
      <div className='flex w-full justify-center gap-20 bottom-0 px-10 items-center relative'>
        <Prev
        index={index} 
        setIndex={setIndex} 
        setUserData={setUserData} />
        <p className='font-bold text-2xl'>Page {index}</p>
        <Next
        index={index} 
        setIndex={setIndex} 
        setUserData={setUserData} />
      </div>
    </div>
  )
}

export default App
