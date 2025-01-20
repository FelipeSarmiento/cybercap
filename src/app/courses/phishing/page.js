'use client'
import {useEffect, useState} from "react";
import { ArrowPathIcon,  FingerPrintIcon } from '@heroicons/react/24/outline'
import { IdentificationIcon, LinkIcon,CloudArrowUpIcon,LockClosedIcon ,  ArrowDownOnSquareStackIcon, ServerIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleBottomCenterIcon,
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  GiftIcon,
  PaperAirplaneIcon,
  PhoneIcon, ShareIcon,
  TableCellsIcon,
  UserIcon
} from "@heroicons/react/16/solid";

const features = [
  { name: '¿Qué es el phishing?', description: ['Definición'] },
  { name: 'Tipos de phishing', description: ['Phishing por correo electrónico.', 'Smishing (SMS phishing).', 'Vishing (Voice phishing).', 'Spear phishing (ataques dirigidos).', 'Whaling (phishing dirigido a ejecutivos).'] },
  { name: 'Cómo Identificar un Intento de Phishing', description: [] },
  { name: 'Buenas Prácticas para Prevenir el Phishing', description: [] },
  { name: 'Qué Hacer si Detectas o Caes en un Ataque de Phishing\n', description: [] }
]
const features2 = [
  {
    name: 'Proporcionen datos confidenciales',
    icon: IdentificationIcon,
  },
  {
    name: 'Hagan clic en enlaces maliciosos',
    icon: LinkIcon,
  },
  {
    name: 'Descarguen archivos adjuntos infectados',
    icon: ArrowDownOnSquareStackIcon,
  },
]
const features3 = [
  {
    name: 'Phishing por correo electrónico',
    items: [
        'Mensajes falsificados que parecen enviados por bancos, redes sociales u otras organizaciones.',
        'Ejemplo: "Tu cuenta será suspendida. Haz clic aquí para verificar tus datos".'
    ],
    icon: EnvelopeIcon,
  },
  {
    name: 'Smishing',
    items: [
      'Phishing a través de mensajes de texto SMS.',
      'Ejemplo: "Tienes un paquete pendiente. Haz clic en este enlace para rastrearlo".'
    ],
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Vishing',
    items: [
      'Phishing por llamadas telefónicas, donde el atacante pretende ser un representante legítimo.',
      'Ejemplo: "Soy del soporte técnico de tu banco. Necesitamos confirmar los números de tu tarjeta para desbloquearla".'
    ],
    icon: PhoneIcon,
  },
  {
    name: 'Spear Phishing',
    items: [
      'Ataques personalizados dirigidos a individuos específicos, usando datos personales o laborales para ganar confianza.',
      'Ejemplo: Un correo dirigido al gerente de finanzas de la empresa, pidiendo una transferencia urgente.'
    ],
    icon: UserIcon,
  },
  {
    name: 'Whaling',
    items: [
      'Phishing enfocado en altos ejecutivos (CEO, CFO) con el objetivo de obtener acceso a datos sensibles o cuentas de la empresa.'
    ],
    icon: TableCellsIcon,
  },
  {
    name: 'Clone Phishing',
    items: [
      'Réplica exacta de un correo legítimo con enlaces modificados para robar información.'
    ],
    icon: ArrowDownOnSquareStackIcon,
  }
]
const features4 = [
  {
    name: 'Urgencia excesiva',
    items: [
        'Mensajes que generan miedo o presión, como "¡Actúa ahora o perderás el acceso!".'
    ],
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Errores de ortografía y gramática',
    items: [
      'Aunque algunos ataques son sofisticados, muchos correos de phishing contienen errores básicos.'
    ],
    icon: DocumentTextIcon,
  },
  {
    name: 'Direcciones de correo sospechosas',
    items: [
      'Remitentes que parecen legítimos pero tienen pequeñas variaciones (ejemplo: soporte@paypa1.com en lugar de paypal.com).',
    ],
    icon: EnvelopeIcon,
  },
  {
    name: 'Enlaces sospechosos',
    items: [
      'Antes de hacer clic, pasa el cursor sobre el enlace para verificar si el dominio es legítimo.',
      'Ejemplo: Un enlace que dice www.tubanco.com pero apunta a http://inseguro-banco.com.'
    ],
    icon: LinkIcon,
  },
  {
    name: 'Solicitudes de información confidencial',
    items: [
      'Empresas legítimas no pedirán contraseñas ni datos bancarios por correo.'
    ],
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Ofertas o premios sospechosos',
    items: [
      'Ejemplo: "¡Felicidades, ganaste un iPhone! Solo ingresa tu información para reclamarlo".'
    ],
    icon: GiftIcon,
  }
]
const features5 = [
  {
    name: 'No hagas clic en enlaces sospechosos',
    description:
        'Si recibes un correo o mensaje, verifica directamente en el sitio web oficial escribiendo la URL en tu navegador.',
    icon: LinkIcon,
  },
  {
    name: 'No descargues archivos adjuntos desconocidos',
    description:
        'Estos podrían contener virus, spyware o ransomware.',
    icon: ArrowDownOnSquareStackIcon,
  },
  {
    name: 'Desconfía de solicitudes urgentes',
    description:
        'Confirma directamente con la empresa antes de realizar cualquier acción.',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Verifica remitentes y enlaces',
    description:
        'Revisa cuidadosamente las direcciones de correo y las URLs antes de interactuar con ellas.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Habilita la autenticación en dos pasos (2FA)',
    description:
        'Este paso extra protege tus cuentas incluso si tus credenciales son robadas.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Sé cauteloso con las redes públicas:',
    description:
        'Evita ingresar datos confidenciales mientras usas Wi-Fi público sin protección.',
    icon: ShareIcon,
  },
]
const posts = [
  {
    id: 1,
    title: 'Si hiciste clic o proporcionaste datos',
    description: [
      'Cambia tus contraseñas inmediatamente.',
      'Habilita 2FA en todas tus cuentas.',
      'Comunica el incidente a tu equipo de seguridad o soporte técnico.'
    ]
  },
  {
    id: 2,
    title: 'Si sospechas de un mensaje',
    description: [
        'No respondas ni hagas clic en nada.',
        'Reporta el mensaje al equipo de TI o al servicio legítimo de la organización que supuestamente lo envió.',
        'Elimina el mensaje si no es necesario investigarlo.'
    ]
  },
  {
    id: 3,
    title: 'Protección adicional',
    description: [
        'Escanea tu dispositivo con un antivirus actualizado para detectar malware.',
    ]
  }
]
export default function Page() {
  return (
      <>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Phishing</h2>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        <ol>
                          {
                            feature.description.map((desc) => (
                                <li key={feature.name + desc}>{desc}</li>
                            ))
                          }
                        </ol>
                      </dd>
                    </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-4/6 sm:gap-6 lg:gap-8">
              <img
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  src="https://img.freepik.com/fotos-premium/manos-enguantadas-escribiendo-teclado-mientras-trabaja-programacion-ciberseguridad_159283-2869.jpg?w=740"
                  className="size-full object-cover rounded-lg bg-gray-100"
              />
              <img
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  src="https://img.freepik.com/vector-gratis/concepto-seguridad-cibernetica_53876-93472.jpg?t=st=1737056735~exp=1737060335~hmac=4f41b6d09cdbc242026293a5f849bbbe14fa55f3d7df89b53374df40687e9698&w=1380"
                  className="size-full object-cover rounded-lg bg-gray-100 "
              />
              <img
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  src="https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062010.jpg?t=st=1737056775~exp=1737060375~hmac=c05596e54615f0d32d0d0bd141a2f85c88c8f73af7e58b22905872931b2d57e1&w=1380"
                  className="size-full object-cover rounded-lg bg-gray-100"
              />
              <img
                  alt="Side of walnut card tray with card groove and recessed card area."
                  src="https://img.freepik.com/foto-gratis/hacker-mujer-feliz-despues-romper-firewall-gobierno-obtener-acceso-programador-que-escribe-malware-peligroso-ataques-ciberneticos-utilizando-computadora-portatil-rendimiento-medianoche_482257-6702.jpg?t=st=1737056875~exp=1737060475~hmac=38398585f32c516b6c151b7b79c23f20daeda5afc4cb46c4db1dc46bae740287&w=740"
                  className="size-full object-cover rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white flex justify-center py-24 sm:py-32">
          <div className="max-w-7xl overflow-hidden px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-[#545E75]">CyberCap</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    ¿Qué es el phishing?
                  </p>
                  <p className="mt-6 text-lg/8 text-justify text-gray-600">
                    El <span className="font-bold">phishing</span> es un método de engaño utilizado por ciberdelincuentes para obtener información personal y confidencial. Los atacantes suelen hacerse pasar por
                    organizaciones legítimas (como bancos, empresas de mensajería o redes sociales) y engañan a las personas para que:
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features2.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#545E75]"/>
                            {feature.name}
                          </dt>
                          {' '}
                        </div>
                    ))}
                  </dl>
                  <p className="mt-6 text-lg/8 text-justify text-gray-600">
                    El <span className="font-bold">phishing</span> se basa en la ingeniería social, que manipula psicológicamente a las personas para que actúen sin pensar críticamente.
                  </p>
                </div>
              </div>
              <img
                  alt="Product screenshot"
                  src="https://img.freepik.com/foto-gratis/hermosa-mujer-joven-oficina-casa-trabajando-casa-concepto-teletrabajo_144627-46787.jpg?t=st=1737061873~exp=1737065473~hmac=64ea6c14104fc5b61ffceeff19751290075190047453dc25a9259ccfae862104&w=1380"
                  width={2432}
                  height={1300}
                  className="w-[44rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:ml-0"
              />
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden flex justify-center px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-[#545E75]">CyberCap</p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Tipos de Phishing
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Existen diferentes formas de phishing, cada una con su enfoque específico:
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                  alt=""
                  src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features3.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#545E75]"/>
                            {feature.name}:
                            {
                              feature.items.map((desc) => (
                                  <span className="font-normal" key={feature.name + desc}> {desc}</span>
                              ))
                            }
                          </dt>
                          {' '}
                        </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden flex justify-center px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-[#545E75]">CyberCap</p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Cómo Identificar un Intento de Phishing
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Los intentos de phishing suelen tener características comunes. Aquí hay algunos puntos clave para identificarlos:
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                  alt=""
                  src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features4.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#545E75]"/>
                            {feature.name}:
                            {
                              feature.items.map((desc) => (
                                  <span className="font-normal" key={feature.name + desc}> {desc}</span>
                              ))
                            }
                          </dt>
                          {' '}
                        </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-[#545E75]">CyberCap</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Buenas Prácticas para Prevenir el Phishing
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features5.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#545E75]">
                          <feature.icon aria-hidden="true" className="size-6 text-white"/>
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                    </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex justify-center max-w-2xl">
              <h2 className=" text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Qué Hacer si Detectas o Caes en un Ataque de Phishing</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="group relative">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0"/>
                        {post.title}
                      </h3>
                      <ul className="mt-5 list-disc line-clamp-3 text-sm/6 text-gray-600">
                        {
                          post.description.map((item) => (
                              <li key={post.id + item}>{item}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}