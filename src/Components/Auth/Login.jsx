import { Link, useNavigate } from "react-router-dom"
import axiosInstance from '../../api/axios'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setToken } from "../../Redux/Jwt"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError]=useState('')
    const [formData, setFormData]=useState({
        email:'',
        password:'',
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleLogin =async (e)=>{
        e.preventDefault()
        try {
            console.log(formData);
            const response = await axiosInstance.post('/login',formData)
            const token = response.data.token
            localStorage.setItem('token',token)
            dispatch(setToken(token))
            navigate('/user/home')
        } catch (error) {
            setError(error.response && error.response.data.message)
            console.error(error);
        }
    }
  return (
    <div className=" h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="flex flex-col  bg-gray-300 py-8 px-4 rounded-lg">
            <h1 className="text-center font-bold text-4xl">Login</h1>
            <input onChange={handleChange} value={formData.email}  type="text" name="email" placeholder="email"  className="m-3 p-2 rounded-md text-center" />
            <input onChange={handleChange} value={formData.Password} type="password" name="password" placeholder="Password" className="m-3 p-2 rounded-md text-center" />
            <p className="text-center text-red-500 text-[11px]">{error}</p>
            <button type="submit" className="bg-blue-500 w-20 self-end mx-3 my-2 p-1 rounded-lg">Login</button>
            <h1 className="text-[10px] text-center">If you dont have a account? Please <Link to={'/signup'}><span className="text-red-500 ">Signup</span></Link></h1>
        </form>
    </div>
  )
}

export default Login