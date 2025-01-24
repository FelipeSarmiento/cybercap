'use client'
import {useEffect, useState} from "react";
import {getSession, getUsersByCompany} from '../../data/data';

const callouts = [
  {
    name: 'Phishing',
    description: 'En este curso aprenderás a identificar intentos de phishing y cómo protegerte de ellos. Reconocerás correos y sitios web sospechosos, comprenderás las tácticas más usadas por los atacantes y desarrollarás habilidades para evitar caer en fraudes digitales.',
    imageSrc: 'https://www.lisot.com/wp-content/uploads/2021/06/que-es-phising.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/courses/phishing',
  },
  {
    name: 'Correos Electrónicos Seguros',
    description: 'Este curso te enseñará a enviar y recibir correos electrónicos de forma segura. Aprenderás a identificar mensajes maliciosos, utilizar protocolos de seguridad, gestionar información sensible y aplicar buenas prácticas para proteger tu bandeja de entrada.',
    imageSrc: 'https://murena.com/wp-content/uploads/2024/01/secure-email.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/courses/secureemails',
  },
  {
    name: 'Contraseñas Robustas',
    description: 'En este curso conocerás cómo crear y gestionar contraseñas seguras que protejan tus cuentas. Aprenderás las características de una contraseña robusta, cómo evitar ataques comunes y el uso de gestores de contraseñas para mejorar tu seguridad digital.',
    imageSrc: 'https://blog.udlap.mx/wp-content/uploads/2020/08/contrasena-.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Ingeniería Social',
    description: 'En este curso descubrirás cómo los ciberdelincuentes manipulan a las personas para obtener información confidencial. Aprenderás a reconocer tácticas de engaño, como llamadas fraudulentas y mensajes falsos, y a protegerte contra estos ataques utilizando estrategias efectivas.',
    imageSrc: 'https://www.esystems.com.co/wp-content/uploads/definicion-de-ingenieria-social.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Page() {

  const [session, setSession] = useState('')
  const [usersByCompany, setUsersByCompany] = useState([])

  useEffect(() => {
    getSession().then((session) => {
      setSession({
        name: session?.names,
        type: session?.company,
        companyname: session?.companyname
      })
    })
  }, []);

  useEffect(() => {
    getUsersByCompany(session?.companyname).then((user) => {
      console.log(user)
      setUsersByCompany(user)
    })
  }, [session]);

  const getClassName = (parameters) => {
    if (parameters){
      if (parameters < 3.0){
        return 'text-red-500'
      }
      return 'text-green-500'
    }
    return 'text-red-500'
  }

  return (
      <>
        <div className="min-h-screen">
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-3xl text-center font-bold text-gray-900 mb-20">Hola {session?.name}, revisa los empleados de {session?.companyname}</h2>

              <div className="border h-96 rounded-xl">
                <div className="grid grid-cols-7 h-20 text-white font-extrabold">
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75] rounded-tl-xl">Nombres</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75]">Correo</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75]">Cédula</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75]">Phishing</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75]">Correos Seguros</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75]">Contraseñas Robustas</div>
                  <div className="flex items-center justify-center border border-gray-400 bg-[#545E75] rounded-tr-xl">Ingeniería Social</div>
                </div>
                {
                  usersByCompany?.map((user) => (
                      <div key={`user-${user.idusuario}`} className="grid grid-cols-7 h-20">
                        <div className="flex items-center justify-center border-b-2 border-gray-800">{user?.names} {user?.lastname}</div>
                        <div className="flex items-center justify-center border-b-2 border-gray-800">{user?.email}</div>
                        <div className="flex items-center justify-center border-b-2 border-gray-800">{user?.identification}</div>
                        <div className={`flex items-center justify-center border-b-2 border-gray-800 font-extrabold ${ getClassName(user?.phishing) }`}>{user?.phishing ?? '0.0'}</div>
                        <div className={`flex items-center justify-center border-b-2 border-gray-800 font-extrabold ${ getClassName(user?.secureemails) }`}>{user?.secureemails ?? '0.0'}</div>
                        <div className={`flex items-center justify-center border-b-2 border-gray-800 font-extrabold ${ getClassName(user?.strongpasswords) }`}>{user?.strongpasswords ?? '0.0'}</div>
                        <div className={`flex items-center justify-center border-b-2 border-gray-800 font-extrabold ${ getClassName(user?.socialengineering) }`}>{user?.socialengineering ?? '0.0'}</div>
                      </div>
                  ))
                }
              </div>

            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center">Conoce un poco sobre noticias de Ciberseguridad!</h2>
        <div className="grid grid-cols-3 gap-10 p-20">

        </div>
      </>
  )
}