import { Square3Stack3DIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Iconhuman from '../../icon/work-from-home.png'
export default function AboutUs() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <p className="text-6xl text-center mb-40 sm:text-8xl"> О проекте</p>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-xl font-semibold leading-7 text-indigo-600">Sweat</p>
                            <h1 className="mt-2 text-3xl font-bold font-Ubuntu tracking-tight text-gray-900 sm:text-4xl">Калькулятор индекса массы тела</h1>
                            <p className="mt-6 text-xl font-Ubuntu leading-8 text-gray-700">
                                ✨Это маленький и удобный калькулятор рассчета индекса массы тела✨
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[15em] max-w-none rounded-xl    ring-gray-400/10 sm:w-[25rem]"
                        src={Iconhuman}
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base font-Ubuntu leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                               Его основные функции
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <Square3Stack3DIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Визуализация</strong> Вы увидете какое примерное тело у вас сейчас на 3д модели.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Хранение ваших данных</strong> для отслеживания прогресса.
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}