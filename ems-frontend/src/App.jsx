import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-200'>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element={<ListEmployeeComponent />}></Route>
            {/* // http://localhost:3000/employees */}
            <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
            {/* // http://localhost:3000/add-employees */}
            <Route path='/add-employee' element = {<EmployeeComponent />}></Route>

            {/* // http://localhost:3000/edit-employees/1 */}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
