import { useDispatch } from "react-redux"
import { clearToken } from "../../Redux/Jwt"
import { useNavigate } from "react-router-dom"

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout =()=>{
        dispatch(clearToken())
        localStorage.removeItem('token')
        navigate('/login')
        
    }
  return (
    <div className='bg-black text-white font-bold flex justify-around items-center p-2'>
        <h1  className='text-4xl'>WELCOME </h1>
        <button onClick={handleLogout} className='bg-red-600 p-1 px-2 rounded-md cursor-pointer '>Logout</button>
    </div>
  )
}

export default Header