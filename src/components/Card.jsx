import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank' >
        <div className='flex flex-col items-center rounded bg-white text-black overflow-hidden'>
          <img src={props.elem.download_url} alt="" className='h-40 w-74 object-cover rounded-t'/>
          <h3 className='text-lg'>Snapped by: <span className='font-bold'>{props.elem.author}</span></h3>
        </div>
      </a>
    </div>
  )
}

export default Card
