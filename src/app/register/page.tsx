'use client'


// @ts-ignore
import {useForm} from "../../lib/hooks/useForm";
// @ts-ignore
import {registerUser} from '../../data/data'
import {useEffect, useState} from "react";

export default function Home() {
    const {onInputChange, formState, onResetForm} = useForm({
        names: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        companyname: '',
        role: '',
        identification: '',
        password: '',
        cpassword: ''
    })

    const [message, setMessage] = useState({
        message: '',
        type: ''
    } as { message: string, type: string })


    useEffect(() => {
        setMessage({
            message: '',
            type: ''
        } as { message: string, type: string })
    }, [formState]);

    const handleSignUp = async () => {
        if (formState.password !==  formState.cpassword){
            setMessage({
                message: "Las contraseñas no coinciden",
                type: 'error'
            })
            return;
        }
        setMessage({message: '', type: ''})

        let result = await registerUser(formState).then((result) => {
            setMessage(result)
        })

    }


    // @ts-ignore
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-32 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="font-extrabold text-center text-4xl text-[#545E75]">CyberCap</h1>
                    <h2 className="mt-10 text-center text-xl font-bold tracking-tight text-gray-900">
                        ¡Ingresa tus datos y comienza a aprender!
                    </h2>
                </div>

                <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-2xl">
                    <form className="grid grid-cols-2 gap-8" onSubmit={(e) => {
                        e.preventDefault();
                        handleSignUp()
                    }}>
                        {/* Nombres */}
                        <div>
                            <label htmlFor="names" className="block text-md font-medium text-gray-900">
                                Nombres*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="names"
                                    name="names"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState && formState.names !== undefined ? formState.names : ''}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Apellidos */}
                        <div>
                            <label htmlFor="lastname" className="block text-md font-medium text-gray-900">
                                Apellidos*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    autoComplete="lastname"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.lastname}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Correo */}
                        <div>
                            <label htmlFor="email" className="block text-md font-medium text-gray-900">
                                Correo Electrónico*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.email}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Cedula */}
                        <div>
                            <label htmlFor="identification" className="block text-md font-medium text-gray-900">
                                Cédula*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="identification"
                                    name="identification"
                                    type="text"
                                    required
                                    autoComplete="identification"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.identification}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Celular */}
                        <div>
                            <label htmlFor="phone" className="block text-md font-medium text-gray-900">
                                Celular*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required
                                    autoComplete="phone"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.phone}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Rol */}
                        <div>
                            <label htmlFor="role" className="block text-md font-medium text-gray-900">
                                Rol*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="role"
                                    name="role"
                                    type="text"
                                    required
                                    autoComplete="role"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.role}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Empresa? */}
                        <div>
                            <label htmlFor="company" className="block text-md font-medium text-gray-900">
                                Empresa o Empleado*
                            </label>
                            <div className="mt-2">
                                <select
                                    name="company"
                                    id="company"
                                    required={true}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    defaultValue={ formState?.company }
                                    onChange={onInputChange}
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    <option value="empresa">Empresa</option>
                                    <option value="empleado">Empleado</option>
                                </select>


                            </div>
                        </div>
                        {/* CodigoEmpresa */}
                        <div>
                            <label htmlFor="companyname" className="block text-md font-medium text-gray-900">
                                Nombre de la Empresa*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="companyname"
                                    name="companyname"
                                    type="text"
                                    required
                                    autoComplete="companyname"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.companyname}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Contraseña */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-md font-medium text-gray-900">
                                    Contraseña*
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.password}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* Contraseña */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="cpassword" className="block text-md font-medium text-gray-900">
                                    Confirma tu contraseña*
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="cpassword"
                                    name="cpassword"
                                    type="password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                    value={formState.cpassword}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <button
                                disabled={ message?.type != '' }
                                type="submit"
                                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#545E75]  ${ message?.type === '' ? "bg-[#545E75]" : (message?.type === "success" ? "bg-green-500" : "bg-red-500")}` }
                            >
                                {message?.message !== '' ? message?.message : 'Registrarse'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-md text-gray-500">
                        ¿ya estás registrado?{' '}
                        <a href="/login" className="font-semibold text-[#545E75] hover:text-[#545E75]">
                            Ingresar
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}