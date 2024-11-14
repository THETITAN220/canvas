
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import appointment from './pages/Appointment'

function App() {

  return (
    <>
      < BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing/>} />
          <Route path='/Login' element= {<Login/>} />
          <Route path='/Appointment' element= {<Appointment/>} />
        </Routes>
        <appointment/>
      </BrowserRouter>
    </>
  )
}


export default App
