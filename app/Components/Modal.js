'use client'

import React from 'react'
import { useState } from 'react'
import "./Modal.css"

const addtask = () => {
  const [modal, setModal] = useState(false)
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])



  const colors = ['bg-blue-200', 'bg-pink-200', 'bg-orange-200', 'bg-green-200', 'bg-yellow-100']



  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    toggleModal()
    console.log(mainTask)
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }



  let renderTask = '';

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      const backgroundColor = colors[i % colors.length];

      return (

        <div key={i} className={`task ${backgroundColor} drop-shadow-xl hover:translate-y-[-7px] hover:shadow-xl w-[30vmin] max-md:w-[30vmax] h-[30vmin] max-md:h-[30vmax] rounded-xl flex flex-wrap flex-col py-3 px-3 overflow-hidden`}>
          <div className='task-content'>
            <h5 className='text-2xl font-bold mb-2'>{t.title}</h5>
            <h6 className='text-md'>{t.desc}</h6>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }} className="close-modal"><img className='w-[2vmax]' src="close.svg" alt="" /></button>
        </div>

      )
    })
  }



  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  };

  
    return (
    <>

    <div className='all-tasks flex max-md:flex-col max-md:items-center flex-wrap gap-[3.3vmin] mt-10 max-md:mt-5'>



      {/* Button For Adding a task */}
      <button className=' bg-yellow-100 drop-shadow-xl hover:translate-y-[-7px] hover:shadow-xl w-[30vmin] max-md:w-[30vmax] h-[30vmin] max-md:h-[30vmax] rounded-xl flex justify-center items-center' onClick={toggleModal}>
      <img className='w-[4vmax]' src="addicon.svg" alt="" />
      </button>


        {renderTask}


      </div>



      {/* Pop up form */}
      {modal && (
        <div className='modal'>
          <div className="overlay">
            <div className="modal-content">
              <form onSubmit={submitHandler} className='w-full flex-col px-2 py-3'>
                <input className='w-full px-2 py-3 text-lg mb-3 rounded-md' type="text" placeholder='Title' value={title} onChange={(e) => {
                  settitle(e.target.value)
                }} />
                <input className='w-full px-2 py-3 text-lg mb-3 rounded-md' type="text" placeholder='Description' value={desc} onChange={(e) => {
                  setdesc(e.target.value)
                }} />
                <button className='px-5 py-3 bg-blue-500 text-white font-bold rounded-md'>Add Task</button>
              </form>

              <button onClick={toggleModal} className="close-modal"><img className='w-[2vmax]' src="close.svg" alt="" /></button>

            </div>

            </div>

            
            
            
            </div>
            
      )}


</>
  )
}

export default addtask