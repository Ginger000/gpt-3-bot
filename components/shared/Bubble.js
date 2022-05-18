import React from 'react'

function Bubble({children}) {
  return (
    <div className='w-fit h-fit flex drop-shadow-md max-w-sm bg-zinc-100/20 px-4 py-2 mx-8 my-2 rounded'>
      {children}
    </div>
  )
}

export default Bubble