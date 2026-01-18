import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate()

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, [])
    
    function addNewEmployee() {
        navigator('/add-employee')
    }

    return (
        <div className="container grow mx-auto mt-10 px-4">
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>List of Employees</h2>
            <button className='flex w-44 mb-4 py-2 items-center justify-center rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800' onClick={addNewEmployee}>
                <span className='mb-0.5'>Adicionar Funcionário</span>
            </button>
            <table className='w-full border-collapse bg-white'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>ID do Funcionário</th>
                        <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Nome</th>
                        <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Sobrenome</th>
                        <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Idade</th>
                        <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Email</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    {
                        employees.map(employee =>
                            <tr key={employee.id} className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm text-gray-700 font-bold'>{employee.id}</td>
                                <td className='px-6 py-4 text-sm text-gray-600'>{employee.firstName}</td>
                                <td className='px-6 py-4 text-sm text-gray-600'>{employee.lastName}</td>
                                <td className='px-6 py-4 text-sm text-gray-600'>{employee.age}</td>
                                <td className='px-6 py-4 text-sm text-gray-600 italic'>{employee.email}</td>
                            </tr>
                        )
                    }

                    <tr>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent