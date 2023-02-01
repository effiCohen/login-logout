import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { SIGN_UP_ROUTE } from '../../shared/constant/url'
import { apiPost } from '../../shared/services/services'

const SignUp = () => {

    const { getValues, register, handleSubmit, formState: { errors } } = useForm()
    const nav = useNavigate()
    const [errMsg,setErrMsg] = useState(null)
    const signUp = async(_bodyData) =>{
        try{
            setErrMsg(null)

            const {data} = await apiPost(SIGN_UP_ROUTE,_bodyData);
            nav('/login')
            console.log(data)
        }catch(err){
            console.log(err.response.data.err_msg)
                
                setErrMsg(err.response.data.err_msg)
            
        }
    }

    const fixJsonFormat = (_bodyData) => {
        const format = {
            fullName: {
                firstName: _bodyData.firstName,
                lastName: _bodyData.lastName,
            },
            password: _bodyData.password,
            email: _bodyData.email,
            profileImg: _bodyData.profileImg
    
        } 

        return format
    }
    const onSub = (_bodyData) => {
 
        console.log(fixJsonFormat(_bodyData))
        signUp(fixJsonFormat(_bodyData))
      }

    const validateConfirmPassword = (value) => {
        if (value !== getValues('password')) {
          return 'Passwords do not match';
        }
      };
      const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const nameRegex = /^[a-zA-Z\s]+$/;
      return (
    <div className=''>
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5 ">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:'1000px'}}>
        <form onSubmit={handleSubmit(onSub)}  className="md:flex w-full">
            <div style={{backgroundImage:'url(https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=)',backgroundSize:'cover',backgroundPosition:'center'}}  className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
      
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-4">
                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 ">
                            <label  className="text-xs font-semibold px-1">First name:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input {...register('firstName',{required:{value:true,message:'First name is required...'},minLength:{value:2,message:'first name at least 2 characters'},maxLength:{value:20,message:'First name less than 20 characters '},pattern:{value:nameRegex,message:'Invalid first name'}})} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="First name..."/>
                            </div>
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

                        </div>
                        <div className="w-1/2 px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Last name:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input {...register('lastName',{required:{value:true,message:'Last name is required...'},minLength:{value:2,message:'Last name at least 2 characters'},maxLength:{value:20,message:'Last name less than 20 characters '},pattern:{value:nameRegex,message:'Invalid last name'}})} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Last name..."/>
                            </div>
                            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Email:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input {...register('email',{required:{value:true,message:'Email is required...'},pattern:{value:emailReg,message:'Invalid email...'}})} type="email" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email..."/>
                            </div>
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Image Profile Link:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register('profileImg')} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Image Profile Link..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">password:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register('password',{required:{value:true,message:'Password is required...'},minLength:{value:6,message:'Password at least 6 characters'},maxLength:{value:25,message:'Password less than 25 characters '}})} type="password" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="password..."/>
                            </div>
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        </div>

                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label  className="text-xs font-semibold px-1">Confirm Password:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register('confirmPassword',{required:{value:true,message:'Confirm Password is required...'},validate:(item)=> validateConfirmPassword(item)})}  type="password" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="confirm password..."/>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                            {errMsg && <p className="text-red-500">{errMsg+'...'}</p>}
                        </div>
                    </div>
                 

                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.tesla.com/he_il" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.jbedgelitsigns.com.au/wp-content/uploads/2022/05/Tesla-Logo-4.jpg"/>
        </a>
    </div>
</div>
    </div>
  )
}

export default SignUp