import './App.css'
import Footer from './components/Footer'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderComponent />
      <ListEmployeeComponent />
      <Footer/>
    </div>
  )
}

export default App
