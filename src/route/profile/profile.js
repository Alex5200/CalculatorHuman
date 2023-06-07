import {App} from '../Config'
import Cookies from "js-cookie";
import {useEffect, useState} from "react";

const db = App.database()

export default function Profile(){
    let email = Cookies.get("Email")
    let data;
    email =  email.replaceAll('.', '_')
    email =  email.replaceAll('@', '-')
    let refs = '/email_' + email
    var jsonData;
    const [state, setState] = useState([])
    function DbRead(){
        db.ref(refs).on("value", snapshot => {
            let allNotes = [];
            snapshot.forEach(snap => {
                allNotes.push(snap.val());
            });
            setState( [ allNotes ]);
           // jsonData = JSON.stringify(state[0])

        });
    }
    var categ = "";
    var indexs = "";


    function seeDb(){
        try {
            var thiKey = JSON.stringify(state[0])
            console.log(thiKey[0])
            Object.keys(thiKey).map(e => {
                <>
                    <td className="border-4 border-slate-300 p-5  text-3xl">{email}</td>
                    <td className="border-4 border-slate-300 p-5  text-3xl">{thiKey[e]}</td>
                    <td className="border-4 border-slate-300 p-5  text-3xl">{indexs}</td>

                </>
            })


        }catch (e){
            console.log(e)
        }

    }
    useEffect(() =>{
        setInterval(()=>{
            DbRead()
        }, 3000, state)
    }, )


    function Comp(){
        console.log()
    }
    return(
        <>

        <table className="border-collapse border border-slate-400 m-auto">
            <thead>
            {}
            <tr >
                <th className="border-4 border-slate-300 p-5  text-4xl ">Email</th>
                <th className="border-4 border-slate-300 p-5 text-4xl">Дата</th>
                <th className="border-4 border-slate-300 p-5 text-4xl">Индекс массы телы</th>
                <th className="border-4 border-slate-300 p-5 text-4xl">Категория</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                {seeDb()}
            </tr>
            <tr>
                <td className="border-4 border-slate-300 p-5  text-3xl">Ohio</td>
                <td className="border-4 bborder-slate-300 p-5  text-3xl">Columbus</td>
            </tr>
            <tr>
                <td className="border-4 border-slate-300 p-5  text-3xl">Michigan</td>
                <td className="border-4 border-slate-300 p-5  text-3xl">Detroit</td>
            </tr>
            </tbody>
        </table>
        </>
    )
}