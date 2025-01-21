'use client'
import { login, setSession } from "../../data/data";

import {useForm} from "../../../src/lib/hooks/useForm";
import {useState} from "react";

export default function Home() {

    const {onInputChange, formState} = useForm({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState('' as string)
    const handleSignIn = async () => {
        setErrorMessage('')
        try {
            let result = await login(formState)

            if (result.ok) {
                await setSession(result.user).then(() => { window.location.href = '/courses'})
            }
            setErrorMessage(result.message)
        } catch (e) {
            setErrorMessage(e.message)
        }
    }

  return (
      <>
          <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h1 className="font-extrabold text-center text-4xl text-[#545E75]">CyberCap</h1>
                  <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                      Ingresa con tu cuenta
                  </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form
                      className="space-y-6"
                      onSubmit={(e) => {
                          e.preventDefault();
                          handleSignIn()
                      }}
                  >
                      <div>
                          <label htmlFor="email" className="block text-md font-medium text-gray-900">
                              Correo Electronico
                          </label>
                          <div className="mt-2">
                              <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                  value={ formState.email }
                                  onChange={ onInputChange }
                              />
                          </div>
                      </div>

                      <div>
                          <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-md font-medium text-gray-900">
                                  Contraseña
                              </label>
                          </div>
                          <div className="mt-2">
                              <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#545E75] sm:text-sm/6"
                                  value={ formState.password }
                                  onChange={ onInputChange }
                              />
                          </div>
                      </div>

                      <div>
                          <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-[#545E75] px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-[#304D6D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#545E75]"
                          >
                              Sign in
                          </button>
                      </div>
                  </form>

                  <p className="mt-10 text-center text-md text-gray-500">
                      ¿No estás registrado?{' '}
                      <a href="/register" className="font-semibold text-[#545E75] hover:text-[#545E75]">
                          Registrate!
                      </a>
                  </p>
              </div>
          </div>
      </>
  )
}