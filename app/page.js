import React from 'react'
import Modal from  "./Components/Modal.js"

const page = () => {

  return (
    <>
    <nav className='w-full h-20 max-md:h-12 flex items-center px-4 py-2 justify-center'>
      <h2 className='text-4xl max-md:text-3xl font-bold'>My Todo List</h2>
    </nav>

    <main className='w-full min-h-screen px-4 flex justify-center'>
    <div className='w-full max-w-[130vmin]'>
    <hr className='w-full m-auto max-md:hidden' />
    
      <Modal/>



    </div>
    </main>
    
    </>
  )
}

export default page
