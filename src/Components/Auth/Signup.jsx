import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from '../../api/axios'
import { useDispatch } from "react-redux"
import { setToken } from "../../Redux/Jwt"

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const [formData, setFormData]=useState({
        username:'',
        email:'',
        password:'',
        // confirmpassword:''
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        setError('')
    }

    // function validation() {
    //     const{password,confirmpassword} = formData
    //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    //     const passCheck = regex.test(password)
    //     if(!passCheck){
    //         console.log('password not strong');
    //         setError('password not strong')
    //         return false
    //     }else if(passCheck !== confirmpassword){
    //         console.log('password does not match');
    //         setError('password does not match')
    //         return false
    //     }
    //     return true
    // }

    const handleLogin =async (e)=>{
        e.preventDefault()

    //    if(validation()){
        try {
            console.log(formData);
            const response = await axiosInstance.post('/signup',formData)
            const token = response.data.token
            localStorage.setItem('token',token)
            dispatch(setToken(token))
            navigate('/user/home')
            console.log(response);
        } catch (error) {
            setError(error.response && error.response.data.message)
            console.error(error);
        }
    //    }
    }

  return (
    <div className=" h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="flex flex-col  bg-gray-300 py-8 px-4 rounded-lg">
            <h1 className="text-center font-bold text-4xl">Signup</h1>
            <input type="text" onChange={handleChange} value={formData.username} name="username" placeholder="Name"  className="m-3 p-2 rounded-md text-center" />
            <input type="text" onChange={handleChange} value={formData.email} name="email" placeholder="email"  className="m-3 p-2 rounded-md text-center" />
            <input type="password" onChange={handleChange} value={formData.password} name="password" placeholder="Password" className="m-3 p-2 rounded-md text-center"/>
            {/* <input type="password" onChange={handleChange} value={formData.confirmpassword} name="confirmpassword" placeholder="confirmpassword" className="m-3 p-2 rounded-md text-center"/> */}
            <p className="text-center text-red-500 text-[11px]">{error}</p>
            <button type="submit" className="bg-blue-500 w-20 self-end mx-3 my-2 p-1 rounded-lg">Signup</button>
            <h1 className="text-[10px] text-center">If you  have a account? Please <Link to={'/'}><span className="text-red-500 cursor-pointer">Login</span></Link></h1>
        </form>
    </div>
  )
}

export default Signup