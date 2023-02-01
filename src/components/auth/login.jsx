import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LOGIN_ROUTE } from '../../shared/constant/url'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../../shared/services/services'

const Login = () => {
  const { getValues, register, handleSubmit, formState: { errors } } = useForm()

  const nav = useNavigate()
  const [errMsg,setErrMsg] = useState(null)
  const login = async(_bodyData) =>{
      try{
          setErrMsg(null)
          const {data} = await apiPost(LOGIN_ROUTE,_bodyData);
          console.log(LOGIN_ROUTE);
          nav('/')
          console.log(data)
      }catch(err){
          console.log(err.response.data.err_msg)
              
              setErrMsg(err.response.data.err_msg)
          
      }
  }

  const fixJsonFormat = (_bodyData) => {
      const format = {
          password: _bodyData.password,
          email: _bodyData.email
      } 

      return format
  }

  const onSub = (_bodyData) => {
 
   // console.log(fixJsonFormat(_bodyData))
    login(fixJsonFormat(_bodyData))
  }
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return (
    <div>
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-start justify-center  p-5   ">
<div className="bg-gray-100 text-gray-500 rounded-2xl shadow-xl w-full overflow-hidden  " style={{maxWidth:'1000px'}}>
    <form onSubmit={handleSubmit(onSub)}  className="md:flex w-full ">
        <div style={{backgroundImage:'url(https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg)',backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'-moz-initial'}}  className="hidden md:block w-7/12 bg-indigo-500 py-10 px-10 ">
  
        </div>
        <div className="w-full   md:w-96  px-5 md:px-10 h-96">
            <div className="text-center  ">
                <h1 className="font-extralight text-3xl text-gray-700">Log In</h1>
              
            </div>
            <div>
                
                <div className="  grid place-items-center ">
                    <div className="w-full sm:w-64 px-1 mb-2">
                        <label  className="text-xs font-semibold px-1">Email:</label>
                        <div className="grid place-items-center">
                            <div className="w-10 z-10 pl-0  pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                            <input {...register('email',{required:{value:true,message:'Email is required...'},pattern:{value:emailReg,message:'Invalid email...'}})} type="email" className="w-full -ml-10 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email..."/>
                        </div>

                    </div>
                </div>
                
                <div className="  grid place-items-center ">
                    <div className="w-full sm:w-64 px-1 mb-2">
                        <label  className="text-xs font-semibold px-1">password:</label>
                        <div className="grid place-items-center">
                            <div className="w-10 z-10 pl-0  pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                            <input {...register('password',{required:{value:true,message:'Password is required...'}})} type="password" className="w-full -ml-10 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="password..."/>
                        </div>
                        {errMsg && <p className="text-red-500">{errMsg}</p>}

                    </div>

                </div>
                
             

                <div className="flex mx-5">
                    <div className="w-full px-3 my-3">
                        <button className="block w-full max-w-xs mx-auto bg-indigo-400 hover:bg-indigo-700 hover:text-yellow-50 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LogIn</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</div>


</div>
  )
}

export default Login