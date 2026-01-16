import React from 'react'

function ListEmployeeComponent() {

    const dummyData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@gmail.com",
            "age": 25     
        },
        {
            "id": 2,
            "firstName": "Joao",
            "lastName": "Top",
            "email": "joao@gmail.com",
            "age": 22     
        },
        {
            "id": 3,
            "firstName": "Gustavo",
            "lastName": "Silva",
            "email": "gustavo@gmail.com",
            "age": 19    
        }
    ]

  return (
    <div className="container mx-auto mt-10 px-4">
        <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>List of Employees</h2>
        <table className='w-full border-collapse bg-white'>
            <thead className='bg-gray-800 text-white'>
                <tr>
                    <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>ID do Funcionário</th>
                    <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Nome</th>
                    <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Sobrenome</th>
                    <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Email</th>
                    <th className='px-6 py-3 font-semibold uppercase text-sm text-left tracking-wider'>Idade</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id} className='hover:bg-gray-50 transition-colors'>
                            <td className='px-6 py-4 text-sm text-gray-700 font-medium'>{employee.id}</td>
                            <td className='px-6 py-4 text-sm text-gray-600'>{employee.firstName}</td>
                            <td className='px-6 py-4 text-sm text-gray-600'>{employee.lastName}</td>
                            <td className='px-6 py-4 text-sm text-gray-600 italic'>{employee.email}</td>
                            <td className='px-6 py-4 text-sm text-gray-600'>{employee.age}</td>
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