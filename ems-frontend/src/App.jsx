import './App.css'
import Footer from './components/Footer'
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
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
