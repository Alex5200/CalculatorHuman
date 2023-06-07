import '../../index.css'
import Calculator from "../calculator/calculator"
import  AboutUs from "./AboutUs"
import Login from "../Login/Login";
import Cookies from 'js-cookie'

import IconLogo from '../../icon/calculator.png'
import {  useState } from 'react'
import {Dialog, Popover} from '@headlessui/react'
import {
    Bars3Icon,
} from '@heroicons/react/20/solid'
import { Link as Linked, Routes, Route } from "react-router-dom";
import Profile from "../profile/profile";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    let Name = "Alex"
    Name =  Cookies.get('Email')
    function ChekRegisterFullWindow(){
        if (Name !== undefined ){
            return(
                <>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Linked to="/" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        О проекте
                    </Linked>
                    <Linked to="/Calculator" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        Подсчет индекса массы тела
                    </Linked>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Linked to="/Profile" href="#" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        {"Hi! " + Name}
                    </Linked>
                </div>
                </>
            )
        }
        else {
            return(
            <>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Linked to="/" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        О проекте
                    </Linked>
                    <Linked to="/Calculator" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        Подсчет индекса массы тела
                    </Linked>
                    <Linked to="/Registration" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        Зарегистрироваться
                    </Linked>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Linked to="/Profile" className="text-xl font-Ubuntu leading-6 text-gray-900">
                        Войти <span aria-hidden="true">&rarr;</span>
                    </Linked>
                </div>
        </>)
        }
    }
    function ChekRegisterShortWindow(){
        if (Name !== ""){
            return(
                <>
                <div className="space-y-2 py-6">
                    <Linked
                        to="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        О проекте
                    </Linked>
                    <Linked
                        to="/Calculator"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Подсчет индекса массы тела
                    </Linked>
                </div>
                <div className="py-6">
                    <Linked
                        to="/Profile"
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {Name}
                    </Linked>
                </div>
            </>
            )

        }
        else {
            return (
            <>
                <div className="space-y-2 py-6">
                    <Linked
                        to="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        О проекте
                    </Linked>
                    <Linked
                        to="/Calculator"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Подсчет индекса массы тела
                    </Linked>
                    <Linked
                        to="/Registration"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Зарегестрироваться
                    </Linked>
                </div>
                <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Войти
                    </a>
                </div>
            </>)
        }
    }
    return (

        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-40 w-auto" src={IconLogo} alt="" />
                        <p className="text-center font-Ubuntu text-5xl">SwEat</p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {ChekRegisterFullWindow()}
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            {ChekRegisterShortWindow()}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/Calculator" element={<Calculator/>}/>
                <Route path="/Registration" element={<Login/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="*" element={<Calculator/>}></Route>
            </Routes>
        </header>
    )
}