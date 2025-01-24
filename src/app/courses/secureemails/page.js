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
import {updateUserCourse} from "../../../data/data";
import {Questionary} from "../../../app/components/questionary";

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

const questions = [
    {
        "title": "¿Cuál es una práctica segura al recibir correos electrónicos?",
        "answer": [
            {
                "title": "Hacer clic en todos los enlaces para verificar su contenido.",
                "type": "incorrect"
            },
            {
                "title": "Reenviar el correo a todos tus contactos para que también lo revisen.",
                "type": "incorrect"
            },
            {
                "title": "Evitar abrir correos de remitentes desconocidos y verificar los enlaces antes de hacer clic.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué característica puede indicar que un correo electrónico es sospechoso?",
        "answer": [
            {
                "title": "Un saludo formal y profesional.",
                "type": "incorrect"
            },
            {
                "title": "Un archivo adjunto relacionado con el asunto del correo.",
                "type": "incorrect"
            },
            {
                "title": "Una dirección de correo desconocida o mal escrita.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué debes hacer si un correo solicita información personal o financiera urgente?",
        "answer": [
            {
                "title": "Responder inmediatamente proporcionando la información requerida.",
                "type": "incorrect"
            },
            {
                "title": "Reenviar el correo a tu equipo de trabajo para revisarlo en conjunto.",
                "type": "incorrect"
            },
            {
                "title": "Ignorarlo y contactar directamente a la empresa o institución para verificar.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué elemento debe verificarse antes de descargar un archivo adjunto en un correo?",
        "answer": [
            {
                "title": "Que el archivo tenga una extensión común como .exe o .zip.",
                "type": "incorrect"
            },
            {
                "title": "Que el correo tenga un diseño profesional.",
                "type": "incorrect"
            },
            {
                "title": "Que el correo provenga de un remitente conocido y confiable.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Cómo puedes protegerte contra correos de phishing?",
        "answer": [
            {
                "title": "Descargando cualquier archivo para confirmar que no es peligroso.",
                "type": "incorrect"
            },
            {
                "title": "Compartiendo el correo con tu equipo para revisar posibles amenazas.",
                "type": "incorrect"
            },
            {
                "title": "Activando filtros antispam y verificando enlaces antes de hacer clic.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué es una firma digital en un correo electrónico?",
        "answer": [
            {
                "title": "Un mensaje automático que se envía a todos los destinatarios.",
                "type": "incorrect"
            },
            {
                "title": "Un diseño gráfico que embellece el correo electrónico.",
                "type": "incorrect"
            },
            {
                "title": "Un método para verificar la autenticidad del remitente y garantizar la integridad del contenido.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Cuál de estos es un ejemplo de un enlace seguro en un correo electrónico?",
        "answer": [
            {
                "title": "Un enlace abreviado sin contexto sobre su destino.",
                "type": "incorrect"
            },
            {
                "title": "Un enlace con caracteres extraños o incompletos.",
                "type": "incorrect"
            },
            {
                "title": "Un enlace que comienza con 'https://' y proviene de un dominio confiable.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué acción es recomendable si recibes un correo con errores ortográficos y gramáticos?",
        "answer": [
            {
                "title": "Responder para solicitar más información al remitente.",
                "type": "incorrect"
            },
            {
                "title": "Ignorarlo, ya que los errores no indican necesariamente un problema.",
                "type": "incorrect"
            },
            {
                "title": "Marcarlo como sospechoso y no interactuar con él.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué debes hacer si recibes un correo de una dirección desconocida con un archivo adjunto?",
        "answer": [
            {
                "title": "Abrir el archivo para verificar si es importante.",
                "type": "incorrect"
            },
            {
                "title": "Responder al correo preguntando por el contenido del archivo.",
                "type": "incorrect"
            },
            {
                "title": "Eliminar el correo inmediatamente y no abrir el archivo adjunto.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué es un encabezado de correo electrónico y por qué es útil?",
        "answer": [
            {
                "title": "Es el asunto del correo visible en la bandeja de entrada.",
                "type": "incorrect"
            },
            {
                "title": "Es un diseño gráfico que decora el inicio del correo.",
                "type": "incorrect"
            },
            {
                "title": "Es información técnica del correo que ayuda a rastrear su origen.",
                "type": "correct"
            }
        ]
    }
]

const hanldeQuestionary = (points) => {
    updateUserCourse("secureemails", points)
}
export default function Page() {
    return (
        <>
            <div className="bg-white mt-20">
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
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-email-marketing_114360-1633.jpg?t=st=1737758775~exp=1737762375~hmac=6d7d55060b1f78f8abb008266d63f48034b9865b73a61076b4654c3787362259&w=1380"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-boletin_114360-4698.jpg?t=st=1737758800~exp=1737762400~hmac=d52b22631c2785587285750955afc23853a4dafb73ae9796b942fef0b38c4781&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100 "
                        />
                        <img
                            alt="Side of walnut card tray with card groove and recessed card area."
                            src="https://img.freepik.com/vector-gratis/correo-electronico-recibir-enviar-correos-electronicos-intercambio-mensajes-dispositivo-electronico-conexion-internet-comunicacion-correspondencia_335657-2704.jpg?t=st=1737758885~exp=1737762485~hmac=50a79a5401001477a1d5f2524383469a0e5419c7971c09797a9b2131bee6d542&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            src="https://img.freepik.com/vector-gratis/nuevo-concepto-mensaje-pagina-destino_23-2148310397.jpg?t=st=1737758960~exp=1737762560~hmac=a5dc1b3da6882dd12809bfbba98e845c6a1defc3795c57306a334dec8507737c&w=740"
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
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-email-marketing_114360-1681.jpg?t=st=1737759014~exp=1737762614~hmac=300f4d3534ccf45e9530b238f8973fe7c1ecd626e6db120467d16379913269fd&w=740"
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
                            src="https://img.freepik.com/vector-gratis/concepto-cuenta-phishing_23-2148546508.jpg?t=st=1737759066~exp=1737762666~hmac=2aae6a1236a29a71a4251ef75aa304ab0d63c0880f7f3ae0177397fac2666bbb&w=740"
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
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-boletin_114360-4698.jpg?t=st=1737758800~exp=1737762400~hmac=d52b22631c2785587285750955afc23853a4dafb73ae9796b942fef0b38c4781&w=740"
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
            <Questionary questions={questions} hanldeQuestionary={hanldeQuestionary} />
        </>
    )
}