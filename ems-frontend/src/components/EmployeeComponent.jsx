import React, { useState } from 'react'

function EmployeeComponent() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  function saveEmployee (e) {
    e.preventDefault()

    const employee = {firstName, lastName, email}
    console.log(employee)
  }

  return (
    <div className='container grow mx-auto px-30 py-36 flex justify-center'>
      <div className='w-full max-w-md rounded-2xl bg-gray-900'>
        <h2 className='text-white p-8 text-2xl text-center font-semibold'>
          Adicionar Funcionário
        </h2>

        <form action="" className='flex flex-col gap-6 px-4'>
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Nome do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o nome do funcionário' 
            name='firstName'
            value={firstName}
            className='bg-white rounded-2xl p-2.5 border-none'
            onChange={handleFirstName}
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Sobrenome do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o sobrenome do funcionário' 
            name='lastName'
            value={lastName}
            className='bg-white rounded-2xl p-2.5 border-none'
            onChange={handleLastName}
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Email do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o email do funcionário' 
            name='email'
            value={email}
            className='bg-white rounded-2xl p-2.5 border-none'
            onChange={handleEmail}
            />
          </div>

          <button 
          className='w-full mt-8 bg-blue-600 text-white p-3 rounded-2xl font-semibold hover:bg-blue-700 transition active:scale-96 duration-150'
          onClick={saveEmployee}
          >
            Adicionar Funcionario
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmployeeComponent