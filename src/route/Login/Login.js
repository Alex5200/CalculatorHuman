import validator from 'validator'
import { App } from "../Config"
import {useState} from "react";
import Cookies from 'js-cookie'
const db = App.database()


export default function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [logo, setLogo] = useState("Sign up to your account\n")

    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmail(email)
        } else {
            setEmail('Enter valid Email!')
        }
    }
    const validatePass = (e) => {
        var passs = e.target.value

        if (passs != "" ) {
            setPass(passs)
        } else {
            setPass('Enter valid Email!')
        }
    }
    const emailErr = () =>{
        if (email == 'Enter valid Email!'){
          return(  <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => validateEmail(e)}
                    required
                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus: ring-red-300 sm:text-sm sm:leading-6"
                />
            </div>
          )
        }
        else {
            return(
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => validateEmail(e)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>)
        }
    }
    const emailPass = () =>{
        if (pass == 'Enter valid Email!'){
            return(  <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => validatePass(e)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                </div>
            )
        }
        else {
            return(
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => validatePass(e)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>)
        }
    }

    function sendData(){
        ChekCookie()

        if (email !== 'Enter valid Email!' && pass !== 'Enter valid Email!') {
            setLogo("HI HI ")
            let email1 = email;
            email1 =  email1.replaceAll('.', '_')
            email1 =  email1.replaceAll('@', '-')
            Cookies.set('Email', email)
            Cookies.set('Pass', pass)



            setLogo(email1)

            db.ref("email_"+email1).set({
                    "email": email1,
                    "pass": pass
                }
            )
        }

    }
    var cookieValue;
    function ChekCookie(){
        cookieValue = Cookies.get('Email')
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {logo}


                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6 p-2" action="#" method="POST"
                    onSubmit={(e)=>{
                        e.preventDefault();

                    }}>
                        <div>
                            <label htmlFor="email"  className='block text-sm font-medium leading-6 text-gray-900 '>
                                Email address
                            </label>
                            {emailErr()}

                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/*<div className="text-sm">*/}
                                {/*    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                                {/*        Forgot password?*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                            {emailPass()}
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={sendData}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}