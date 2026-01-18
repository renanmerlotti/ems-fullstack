import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
              {/* // http://localhost:3000 */}
              <Route path='/' element={<ListEmployeeComponent />}></Route>
              {/* // http://localhost:3000/employees */}
              <Route path='/employees' element = {<ListEmployeeComponent />}></Route>

              <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
