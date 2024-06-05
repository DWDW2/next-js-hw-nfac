import React from 'react'

const Input = ({...props}) => {
  return (
    <input {...props} className='py-3 px-8 bg-slate-200 rounded-md outline-none sm:mt-5 mt-2'/>
  )
}

export default Input