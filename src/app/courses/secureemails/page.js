'use client'
import {useEffect, useState} from "react";
import {ArrowPathIcon, FingerPrintIcon} from '@heroicons/react/24/outline'
import {IdentificationIcon, LinkIcon, CloudArrowUpIcon, LockClosedIcon, ArrowDownOnSquareStackIcon, ServerIcon} from '@heroicons/react/20/solid'
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
    {name: '¿Por Qué Es Importante el Uso Seguro del Correo Electrónico?', description: ['Amenazas comunes']},
    {
        name: 'Principios Básicos para el Uso Seguro del Correo Electrónico',
        description: [
            'Piensa antes de hacer clic',
            'Revisa el remitente',
            'Evita compartir información confidencial por correo',
            'Habilita herramientas de seguridad',
            'Whaling (phishing dirigido a ejecutivos).'
        ]
    },
    {
        name: 'Mejores Prácticas para Correos Electrónicos Seguros',
        description: [
            'Antes de Enviar un Correo Electrónico',
            'Al Recibir un Correo Electrónico',
            'Protección General'
        ]
    },
    {
        name: 'Identificando Correos Peligrosos',
        description: [
            'Características comunes de correos maliciosos',
            'Cómo revisar enlaces sospechosos'
        ]
    },
    {
        name: 'Herramientas y Configuraciones para Correos Electrónicos Seguros',
        description: [
            'Filtros de spam',
            'Cifrado de correos',
            'Autenticación en dos pasos (2FA)',
            'Protocolos seguros'
        ]
    },
    {
        name: '¿Qué Hacer si Recibes un Correo Sospechoso?',
        description: []
    }
]
const features2 = [
    {
        name: 'Phishing',
        icon: IdentificationIcon,
    },
    {
        name: 'Malware',
        icon: LinkIcon,
    },
    {
        name: 'Suplantación de identidad',
        icon: ArrowDownOnSquareStackIcon,
    },
    {
        name: 'Fugas de información',
        icon: ArrowDownOnSquareStackIcon,
    },
]
const features3 = [
    {
        name: 'Piensa antes de hacer clic',
        items: [
            'Antes de abrir un enlace o descargar un archivo, verifica su legitimidad.',
        ],
        icon: EnvelopeIcon,
    },
    {
        name: 'Revisa el remitente',
        items: [
            'Asegúrate de que el correo proviene de una fuente confiable. Confirma manualmente si tienes dudas.'
        ],
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        name: 'Evita compartir información confidencial por correo',
        items: [
            'Datos sensibles como contraseñas, números de tarjetas o credenciales de acceso nunca deben enviarse por correo.',
        ],
        icon: PhoneIcon,
    },
    {
        name: 'Habilita herramientas de seguridad',
        items: [
            'Usa autenticación en dos pasos (2FA) y asegúrate de que los filtros de spam estén activos.'
        ],
        icon: UserIcon,
    }
]
const features4 = [
    {
        name: 'Verifica a los destinatarios',
        items: [
            'Asegúrate de que los correos ingresados sean correctos y no se incluyan personas innecesarias en el mensaje.'
        ],
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Usa el campo CC y CCO con cuidado',
        items: [
            'CC (Copia Carbón): Solo para contactos que deben ver el mensaje.',
            'CCO (Copia Carbón Oculta): Protege la privacidad al ocultar los correos de los demás destinatarios.',
        ],
        icon: DocumentTextIcon,
    },
    {
        name: 'Revisa el contenido',
        items: [
            'Confirma que el mensaje no contiene información sensible o errores.',
        ],
        icon: EnvelopeIcon,
    }
]
const features41 = [
    {
        name: 'No confíes automáticamente',
        items: [
            'Los correos de remitentes desconocidos o con un contenido inusual deben ser tratados con precaución.'
        ],
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Desconfía de urgencias sospechosas',
        items: [
            'Mensajes con frases como "¡Responde inmediatamente!" suelen ser intentos de manipulación.',
        ],
        icon: DocumentTextIcon,
    },
    {
        name: 'Evita descargar archivos adjuntos desconocidos',
        items: [
            'Verifica el origen antes de abrir documentos o imágenes.',
        ],
        icon: EnvelopeIcon,
    }
]
const features42 = [
    {
        name: 'Cambia tus contraseñas regularmente',
        items: [
            'Usa contraseñas únicas y difíciles de adivinar para cada cuenta.'
        ],
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Mantén el software actualizado',
        items: [
            'Asegúrate de que tu cliente de correo y tu antivirus estén al día.',
        ],
        icon: DocumentTextIcon,
    },
    {
        name: 'Elimina correos innecesarios',
        items: [
            'Limpia regularmente tu bandeja de entrada para evitar acumular información sensible.',
        ],
        icon: EnvelopeIcon,
    }
]
const features5 = [
    {
        name: 'Características comunes de correos maliciosos',
        description: [
            'Direcciones de remitentes extrañas',
            'Errores gramaticales o de ortografía',
            'Promesas tentadoras',
            'Archivos adjuntos inesperados',
        ],
        icon: LinkIcon,
    },
    {
        name: 'Cómo revisar enlaces sospechosos',
        description: [
            'Pasa el cursor sobre el enlace sin hacer clic para verificar la URL',
            'Asegúrate de que los dominios coincidan con la fuente legítima'
        ],
        icon: ArrowDownOnSquareStackIcon,
    }
]
const posts = [
    {
        id: 1,
        title: 'No interactúes con el mensaje',
        description: [
            'No respondas, no hagas clic en enlaces ni descargues archivos.'
        ]
    },
    {
        id: 2,
        title: 'Informa al equipo de TI',
        description: [
            'Reporta el correo para que el equipo pueda analizarlo y tomar medidas.'
        ]
    },
    {
        id: 3,
        title: 'Elimínalo',
        description: [
            'Si el correo ha sido confirmado como peligroso, bórralo permanentemente.',
        ]
    }
]
export default function Page() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uso Seguro del Correo Electrónico</h2>

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
                                    ¿Por Qué Es Importante el Uso Seguro del Correo Electrónico
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    El correo electrónico es una herramienta esencial para la comunicación empresarial, pero también es uno de los principales objetivos de los ciberataques.
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
                                    Principios Básicos para el Uso Seguro del Correo Electrónico
                                </h1>
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
                                    Mejores Prácticas para Correos Electrónicos Seguros
                                </h1>
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

                                    <p className="mt-6 text-xl/8 text-gray-700">
                                        Antes de Enviar un Correo Electrónico
                                    </p>
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

                                    <p className="mt-6 text-xl/8 text-gray-700">
                                        Al Recibir un Correo Electrónico
                                    </p>
                                    {features41.map((feature) => (
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
                                    <p className="mt-6 text-xl/8 text-gray-700">
                                        Protección General
                                    </p>
                                    {features42.map((feature) => (
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
                            Identificando Correos Peligrosos
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features5.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-gray-900">
                                        <div className="absolute left-0 top-2/4 -translate-y-2/4 flex size-10 items-center justify-center rounded-lg bg-[#545E75]">
                                            <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <ul className="mt-2 text-base/7 text-gray-600">
                                        {
                                            feature.description.map((item) => (
                                                <li key={feature.name + item}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex justify-center max-w-2xl">
                        <h2 className=" text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">¿Qué Hacer si Recibes un Correo Sospechoso?</h2>
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