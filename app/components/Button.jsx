import React from 'react'

const Button = ({...props}) => {
  return (
    <button {...props} className='py-3 px-8 sm:mt-5 bg-red-600 text-white mt-2 rounded-md'>
        Submit
    </button>
  )
}

export default Button