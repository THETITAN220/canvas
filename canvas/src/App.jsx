
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Appointment from './pages/appointment'
import Log from './pages/Log'

function App() {

  return (
    <>
      < BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing/>} />
          <Route path='/Login' element= {<Login/>} />
          <Route path='/Appointment' element= {<Appointment />} />
          <Route path='/Log' element={<Log />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}


export default App
