import React from 'react'
import Button from '../Button'

const Post_inner = (props) => {
    
  return (
    <div className='text-center mt-10 bg-blue-400 w-3/4 mx-auto my-auto p-10'>
            <h1 className='text-[25px] text-bold'>
                {props.title}
            </h1>
        <div className='grid grid-cols-1 gap-2 w-60 mx-auto my-auto sm:grid-cols-2 '>
            <span className='text-[16px]'>
                {props.author}
            </span>
            <span className='text-[16px]'>
                {props.date}
            </span>
        </div>
        <div className='mt-10'>
            {props.description}
        </div>
    </div>
  )
}

export default Post_inner