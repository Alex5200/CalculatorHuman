import Cookies from "js-cookie";
import {useState} from "react";
import {App} from "../Config"

const db = App.database()
export default function Calculator(){
    const [w, setW] = useState(0)
    const [v, setV] = useState(0)
    const [result, setResult] = useState(0)
    const [resultCategory, setresultCategory] = useState(0)
    const [id, setId] = useState(0);

    const indexHuman = ""
    let email = Cookies.get("Email")
    function SendDataIndex(){
        if (result != 0){
            var today = new Date()
            setId(today.getDate())
            email =  email.replaceAll('.', '_')
            email =  email.replaceAll('@', '-')
            var send = {
                    "index": result,
                    "category": resultCategory,
            }

        db.ref("email_"+email+"/HumanIndex_" + id).update(send)}
    }

    const HandleClickW = (e) => {
        setW(e.target.value);
    }
    const HandleClickV = (e) => {
        setV(e.target.value);
    }
    function HumanRes(){
        var res = w**2
        var res2 = v/res
        res2 = res2 * 10000
        res2 = Math.floor(res2)
        if (res2 <= 16){
            setresultCategory("Дифицит")
        }else if (res2 >= 16 && res2 <= 18){
            setresultCategory("Предел дифицит")
        }else if (res2 >= 18.5 && res2 <= 24){
            setresultCategory("Норма")
        }else if (res2 >= 25 && res2 <= 29){
            setresultCategory("Избыток ")
        }else if (res2 >= 30){
            setresultCategory("Ожирение ")
        }
        setResult(res2 )
    }

    function SendIndexHuman(){
        if(result != 0){
            return (
                <div>
                    <div>
                        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Категория</label>
                        <input id="default-range" type="range" min="0" max="35" value={result } className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-red-600 via-yellow-300 via-green-400 via-yellow-300 to-red-600" />
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8 text-white text-center text-3xl p-2.5">
                        <p> Ваш индекс массы тела: {result}</p>
                        <p> Ваша категория тела: {resultCategory}</p>
                        <button
                            type=""
                            onClick={SendDataIndex}
                            className="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold    leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Сохранить
                        </button>
                    </div>
                </div>
            )
        }
    }
return(
   <>

       <div className="bg-white">
           <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
               <div
                   className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                   <svg viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true">
                       <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                               fill-opacity="0.7"/>
                       <defs>
                           <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                               <stop stop-color="#7775D6"/>
                               <stop offset="1" stop-color="#E935C1"/>
                           </radialGradient>
                       </defs>
                   </svg>
                   <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left m-10" >
                       <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hi {Cookies.get('Email')}<br/>Start
                           using our app today. </h2>
                           <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-3xl font-medium text-white p-4">
                                Введите Рост
                              </span>
                               <input type="text" name="text"
                                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                      placeholder="180"
                               onChange={(e) => HandleClickW(e)}/>
                           </label>
                           <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-3xl font-medium text-white p-4">
                                Введите Вес
                              </span>
                               <input type="text" name="text"
                                      onChange={(e) => HandleClickV(e)}

                               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                      placeholder="90"/>
                           </label>
                           <button
                               type=""
                               onClick={HumanRes}
                               className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold mt-4   leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                           >
                               Рассчитать
                           </button>
                   </div>
                   {SendIndexHuman()}
               </div>
           </div>
       </div>
   </>
);}
