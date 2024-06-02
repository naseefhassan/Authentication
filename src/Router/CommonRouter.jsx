import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import Signup from '../Components/Auth/Signup'

function CommonRouter() {
  return (
    <Routes>
        <Route path='/*' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
    </Routes>
  )
}

export default CommonRouter