import React from 'react'

function HeaderComponent() {
  return (
    <header className='w-full bg-gray-900 shadow-md'>
        <div className='container mx-auto h-20 flex items-center justify-between'>
            <nav className='flex item-center gap-4'>
                <h1 className='text-white text-xl hover:text-gray-200 font-semibold'>Gerenciador de Funcionários</h1>
            </nav>
        </div>
    </header>
  )
}

export default HeaderComponent