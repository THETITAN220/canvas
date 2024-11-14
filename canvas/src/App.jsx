
import { BrowserRouter , Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {

  return (
    <>
      < BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing/>} />
          <Route path='/Login' element= {<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
