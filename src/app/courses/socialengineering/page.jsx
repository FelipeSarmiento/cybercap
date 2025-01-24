'use client'
import {Questionary} from "../../components/questionary";
import {updateUserCourse} from '../../../data/data';
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
    {name: 'Introducción a la Ingeniería Social', description: ['¿Qué es la ingeniería social?', 'Historia y evolución de la ingeniería social.', 'El papel del factor humano en la seguridad informática']},
    {
        name: 'Técnicas Comunes de Ingeniería Social',
        description: ['Phishing', 'Pretexting', 'Baiting', 'Tailgating y Piggybacking', 'Vishing y Smishing']
    },
    {name: 'Psicología de la Ingeniería Social', description: ['Cómo los atacantes explotan las emociones humanas', 'Factores psicológicos que los atacantes utilizan']},
    {name: 'Reconocimiento y Prevención de Ataques', description: ['Señales de advertencia comunes', 'Cómo protegerse']}
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
        name: 'Phishing:',
        items: [
            'Correo electrónico diseñado para parecer legítimo con el fin de robar información personal.',
            'Ejemplos: Correos falsos de bancos, empresas tecnológicas o instituciones gubernamentales.',
            'Métodos de entrega: Enlaces maliciosos, archivos adjuntos infectados o formularios falsos.'
        ],
        icon: EnvelopeIcon,
    },
    {
        name: 'Pretexting',
        items: [
            'Creación de un escenario ficticio para engañar a la víctima y que comparta información confidencial.',
            'Ejemplo: Un atacante que se hace pasar por soporte técnico para obtener acceso remoto a un dispositivo.'
        ],
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        name: 'Baiting',
        items: [
            'Ofrecimiento de algo tentador (como un USB "perdido" o software gratuito) para que la víctima acceda a sistemas o instale malware.',
            'Ejemplo: Un USB encontrado en un estacionamiento que contiene software malicioso.'
        ],
        icon: PhoneIcon,
    },
    {
        name: 'Tailgating y Piggybacking',
        items: [
            'Tailgating: Seguir a una persona autorizada para ingresar a un área restringida sin tener permiso.',
            'Piggybacking: Permitir que otra persona acceda a un área restringida por cortesía o descuido.'
        ],
        icon: UserIcon,
    },
    {
        name: 'Vishing (Phishing por Voz)',
        items: [
            'Llamadas telefónicas donde los atacantes se hacen pasar por bancos, soporte técnico o instituciones gubernamentales.',
            'Ejemplo: Llamadas que informan de un supuesto fraude bancario para obtener datos de la tarjeta.'
        ],
        icon: UserIcon,
    },
    {
        name: 'Smishing (Phishing por SMS)',
        items: [
            'Mensajes de texto maliciosos que contienen enlaces o solicitan información confidencial.',
            'Ejemplo: Mensajes falsos sobre paquetes de entrega o promociones.'
        ],
        icon: UserIcon,
    }
]
const features4 = [
    {
        name: 'Explotación de emociones humanas',
        items: [
            'Confianza: Fingir ser una autoridad o contacto legítimo para obtener información. ',
            'Miedo y urgencia: Crear una sensación de inmediatez para que la víctima actúe sin pensar.',
            'Curiosidad: Ofrecer algo tentador o intrigante, como un archivo llamado "Datos confidenciales".'
        ],
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Factores psicológicos utilizados por atacantes',
        items: [
            'Autoridad: Hacerse pasar por figuras de poder (gerentes, bancos, policías).',
            'Simpatía: Ganarse la confianza actuando amigablemente.',
            'Reciprocidad: Ofrecer un favor o ventaja para recibir algo a cambio.'
        ],
        icon: DocumentTextIcon,
    }
]
const features5 = [
    {
        name: 'Señales de advertencia comunes',
        description: ['Correos con errores gramaticales o ortográficos.', 'Solicitudes inesperadas de información personal o financiera.', 'Enlaces que no coinciden con la dirección web oficial (al pasar el cursor).', 'Mensajes con un tono de urgencia o amenaza ("Tu cuenta será desactivada").'],
        icon: LinkIcon,
    },
    {
        name: 'Cómo protegerse',
        description: ['Verificar la identidad del remitente antes de compartir información.', 'No hacer clic en enlaces sospechosos ni descargar archivos de fuentes desconocidas.', 'Confirmar solicitudes urgentes a través de canales oficiales.', 'Mantener actualizados los sistemas y software de seguridad.'],
        icon: ArrowDownOnSquareStackIcon,
    }
]
const posts = [
    {
        id: 1,
        title: 'Escribir contraseñas en papel',
        description: [
            'Dejar tus contraseñas escritas en papel o post-its expone tus datos a cualquier persona que tenga acceso físico a tu escritorio.',
        ]
    },
    {
        id: 2,
        title: 'Guardar contraseñas en archivos no protegidos',
        description: [
            'Un archivo de texto sin cifrar puede ser accesible fácilmente si tu dispositivo es comprometido.'
        ]
    },
    {
        id: 3,
        title: 'Usar preguntas de seguridad débiles',
        description: [
            'Preguntas como "¿Cuál es tu color favorito?" tienen respuestas que pueden ser fácilmente investigadas en redes sociales.',
        ]
    },
    {
        id: 4,
        title: 'Confiar en correos o enlaces sospechosos',
        description: [
            'Nunca ingreses tu contraseña en sitios web que no sean confiables o que lleguen por medio de correos electrónicos no solicitados.',
        ]
    }
]
const posts2 = [
    {
        id: 1,
        title: 'Usa frases largas y únicas',
        description: [
            'Combina palabras aleatorias y separadores únicos.',
            'Ejemplo: Rana-Verde#Saltarina2024!.',
        ]
    },
    {
        id: 2,
        title: 'Método de frases mnemotécnicas',
        description: [
            'Crea una contraseña basada en la primera letra de cada palabra de una frase significativa.',
            'Ejemplo: "Siempre tomo café en las mañanas 2024" → StC3nlM2024!.',
        ]
    },
    {
        id: 3,
        title: 'Utiliza administradores de contraseñas',
        description: [
            'Deja que estas herramientas creen y gestionen contraseñas por ti. Solo recuerda tu contraseña maestra.',
        ]
    }
]

const questions = [
    {
        "title": "¿Qué es la ingeniería social?",
        "answer": [
            {
                "title": "Es un ataque basado en malware que compromete sistemas sin intervención humana.",
                "type": "incorrect"
            },
            {
                "title": "Es una técnica de manipulación psicológica utilizada por atacantes para obtener información sensible explotando la confianza humana.",
                "type": "correct"
            },
            {
                "title": "Es una herramienta de software diseñada para proteger datos personales.",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Cuál de las siguientes técnicas se basa en correos electrónicos falsos para engañar a las personas?",
        "answer": [
            {
                "title": "Baiting",
                "type": "incorrect"
            },
            {
                "title": "Phishing",
                "type": "correct"
            },
            {
                "title": "Tailgating",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Qué emoción suelen explotar los atacantes en la ingeniería social para que las víctimas actúen rápidamente?",
        "answer": [
            {
                "title": "Felicidad",
                "type": "incorrect"
            },
            {
                "title": "Miedo y urgencia",
                "type": "correct"
            },
            {
                "title": "Tristeza",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Qué técnica de ingeniería social implica dejar dispositivos infectados en lugares públicos?",
        "answer": [
            {
                "title": "Phishing",
                "type": "incorrect"
            },
            {
                "title": "Baiting",
                "type": "correct"
            },
            {
                "title": "Pretexting",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Cómo puedes identificar un intento de pretexting?",
        "answer": [
            {
                "title": "Incluye enlaces sospechosos en un correo electrónico.",
                "type": "incorrect"
            },
            {
                "title": "Se basa en dispositivos USB infectados.",
                "type": "incorrect"
            },
            {
                "title": "El atacante finge ser una autoridad o contacto confiable para obtener información.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué es el tailgating en ingeniería social?",
        "answer": [
            {
                "title": "Es un correo que simula ser de una entidad bancaria.",
                "type": "incorrect"
            },
            {
                "title": "Es cuando un atacante se aprovecha de alguien para acceder físicamente a un área restringida sin autorización.",
                "type": "correct"
            },
            {
                "title": "Es una técnica para engañar a través de redes sociales.",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Qué medida puedes tomar para evitar caer en ingeniería social?",
        "answer": [
            {
                "title": "Evitar responder correos electrónicos laborales.",
                "type": "incorrect"
            },
            {
                "title": "Compartir información confidencial solo en llamadas telefónicas.",
                "type": "incorrect"
            },
            {
                "title": "Verificar la identidad de las personas antes de proporcionar información.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Cuál es un ejemplo de vishing?",
        "answer": [
            {
                "title": "Enviar un correo electrónico falso para robar contraseñas.",
                "type": "incorrect"
            },
            {
                "title": "Un atacante realiza llamadas telefónicas fingiendo ser de soporte técnico para obtener datos personales.",
                "type": "correct"
            },
            {
                "title": "Dejar un USB infectado en un espacio público.",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Qué debe hacer una persona si sospecha de un intento de ingeniería social?",
        "answer": [
            {
                "title": "Ignorarlo y continuar con su trabajo.",
                "type": "incorrect"
            },
            {
                "title": "Responder para confirmar la identidad del atacante.",
                "type": "incorrect"
            },
            {
                "title": "Reportarlo al equipo de seguridad de la organización inmediatamente.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué técnica de ingeniería social utiliza mensajes en redes sociales para engañar a las personas?",
        "answer": [
            {
                "title": "Pretexting",
                "type": "incorrect"
            },
            {
                "title": "Phishing",
                "type": "incorrect"
            },
            {
                "title": "Scareware",
                "type": "correct"
            }
        ]
    }
]


const hanldeQuestionary = (points) => {
    updateUserCourse("socialengineering", points)
}

export default function Page() {
    return (
        <>
            <div className="bg-white mt-20">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ingeniería Social</h2>

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
                            src="https://img.freepik.com/vector-premium/personaje-mujer-social-media-diseno-aislado_24877-44736.jpg?w=740"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-desarrollo-social-ninos-aprenden-competencia-habilidades-sociales-impacto-positivo-comunicacion-exitosa-exito-profesional-metafora-abstracta-educacion_335657-1426.jpg?t=st=1737759586~exp=1737763186~hmac=70dd47c09ace257d4e6672d52985730af6a4961420ec5a9166ee0a1a93bfb446&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100 "
                        />
                        <img
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-colaboracion-vivo_114360-663.jpg?t=st=1737759613~exp=1737763213~hmac=a38539246c7f84374ccf89f44a8b70d158099f9571469abb85d3d167d5f7a1c3&w=1380"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Side of walnut card tray with card groove and recessed card area."
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-conectados_114360-512.jpg?t=st=1737759660~exp=1737763260~hmac=de204625274b7a7768502d81ca4e94042ade648d4772019a1d769147ee9327e6&w=740"
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
                                <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                    Introducción a la Ingeniería Social
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    <span className="text-lg font-bold">¿Qué es la ingeniería social?</span> Es una técnica de manipulación psicológica utilizada por atacantes para obtener información sensible, como
                                    contraseñas, datos personales, financieros o acceso a sistemas. A diferencia de los ataques técnicos, se basa en explotar la confianza humana y las emociones para engañar a las
                                    personas.
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    <span className="text-lg font-bold">Relación con la ciberseguridad</span> Es una de las mayores amenazas debido a que el "eslabón más débil" en la seguridad suele ser el usuario. Los
                                    sistemas más avanzados pueden ser vulnerables si los usuarios son engañados.
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    <span className="text-lg font-bold">Historia y evolución de la ingeniería social</span> Orígenes de los primeros ataques sociales, como fraudes telefónicos. Casos famosos como el de
                                    Kevin Mitnick, uno de los primeros hackers que popularizó estas técnicas.
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    <span className="text-lg font-bold">El papel del factor humano</span> Más del 90% de los ataques exitosos involucran alguna forma de ingeniería social. Las emociones como la urgencia,
                                    el miedo y la curiosidad suelen ser claves en estos ataques.
                                </p>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-amigos-verdaderos_114360-2883.jpg?t=st=1737759816~exp=1737763416~hmac=fbd0ff63f2daa2367c775f917a0dfb147c48f2a60fceb663bde6dbda892ae984&w=740"
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
                                    Técnicas Comunes de Ingeniería Social
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="https://img.freepik.com/vector-premium/ilustracion-hombre-lineal-que-muestra-telefono-inteligente-sitio-web-mujer-mientras-reunen-comunican-si-cafeteria_241107-381.jpg?w=740"
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
                <div className="mx-auto max-h-[calc(80vh)] grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-7xl lg:grid-cols-2 lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-[#545E75]">CyberCap</p>
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    Psicología de la Ingeniería Social
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-resumen-propiedades_114360-1481.jpg?t=st=1737759911~exp=1737763511~hmac=390b319bc757657598b4fb5ead2755061cab276dcc217280e0a7dcfece7f8914&w=740"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem]"
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
                <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-4 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-[#545E75]">CyberCap</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            Reconocimiento y Prevención de Ataques
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 justify-center items-center gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features5.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-gray-900">
                                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#545E75]">
                                            <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-justify text-gray-600">
                                        <ul>

                                            {
                                                feature.description.map((item, index) => (
                                                    <li key={item + index}>- {item}</li>
                                                ))
                                            }
                                        </ul>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <Questionary questions={questions} hanldeQuestionary={hanldeQuestionary}/>
        </>
    )
}