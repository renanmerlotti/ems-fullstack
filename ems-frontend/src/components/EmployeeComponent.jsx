import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeComponent() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const {id} = useParams()

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: ''
  })

  const navigator = useNavigate()

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  function saveEmployee (e) {
    e.preventDefault()

    const ageInt = parseInt(age)

    if(validateForm()) {
      const employee = {
      firstName,
      lastName,
      email,
      age: ageInt
      }
      console.log(employee)

      createEmployee(employee).then((response) => {
        console.log(response.data)
        navigator('/employees')
      })
    }
    

    
  }

  function validateForm() {
    let valid = true

    const errorsCopy = {... errors}

    if(firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = "O nome do funcionário é obrigatório"
      valid = false
    }

    if(lastName.trim()) {
      errorsCopy.lastName = ''
    } else {
      errorsCopy.lastName = "O sobrenome do funcionário é obrigatório"
      valid = false
    }

    if(email.trim()) {
      errorsCopy.email = ''
    } else {
      errorsCopy.email = "O email do funcionário é obrigatório"
      valid = false
    }

    if(age) {
      errorsCopy.age = ''
    } else {
      errorsCopy.age = "A idade do funcionário é obrigatória"
      valid = false
    }

    setErrors(errorsCopy)

    return valid
  }

  function pageTitle() {
    if(id) {
      return <h2 className='text-white p-8 text-2xl text-center font-semibold'>Editar Funcionário</h2>
    } else {
      return <h2 className='text-white p-8 text-2xl text-center font-semibold'>Adicionar Funcionário</h2>
    }
  }

  return (
    <div className='container grow mx-auto px-30 py-28 flex justify-center'>
      <div className='w-full max-w-md rounded-2xl bg-gray-900'>
        {
          pageTitle()
        }
        <form action="" className='flex flex-col gap-1 px-4'>
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Nome do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o nome do funcionário' 
            name='firstName'
            value={firstName}
            className={`bg-white rounded-2xl p-2.5 transition-all ${errors.firstName ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
            onChange={handleFirstName}
            />
            <div className='h-5'>
              {errors.firstName && <span className='text-red-500 text-sm'>{errors.firstName}</span>}
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Sobrenome do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o sobrenome do funcionário' 
            name='lastName'
            value={lastName}
            className={`bg-white rounded-2xl p-2.5 transition-all ${errors.lastName ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
            onChange={handleLastName}
            />
            <div className='h-5'>
              {errors.lastName && <span className='text-red-500 text-sm'>{errors.lastName}</span>}
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Email do Funcionário</label>
            <input 
            type="text"
            placeholder='Digite o email do funcionário' 
            name='email'
            value={email}
            className={`bg-white rounded-2xl p-2.5 transition-all ${errors.email ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
            onChange={handleEmail}
            />
            <div className='h-5'>
              {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="" className='text-white text-xl ml-1'>Idade do Funcionário</label>
            <input 
            type="number"
            placeholder='Digite a idade do funcionário' 
            name='age'
            value={age}
            className={`bg-white rounded-2xl p-2.5 transition-all ${errors.age ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
            onChange={handleAge}
            />
            <div className='h-5'>
              {errors.age && <span className='text-red-500 text-sm'>{errors.age}</span>}
            </div>
          </div>

          <button 
          className='w-full bg-blue-600 text-white p-3 rounded-2xl font-semibold hover:bg-blue-700 transition active:scale-96 duration-150'
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