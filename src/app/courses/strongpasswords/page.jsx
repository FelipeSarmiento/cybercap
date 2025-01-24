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
    {name: '¿Por qué son importantes las contraseñas robustas?', description: ['Definición de contraseñas robustas', 'Impacto de contraseñas débiles', 'Consecuencias de una brecha']},
    {
        name: '¿Qué hace que una contraseña sea robusta?',
        description: ['Características clave']
    },
    {name: 'Mejores prácticas para gestionar contraseñas', description: []},
    {name: 'Ejemplos de contraseñas inseguras', description: []},
    {name: 'Errores comunes que debes evitar', description: []},
    {name: 'Cómo crear y recordar contraseñas robustas', description: []},
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
        name: 'Longitud mínima:',
        items: [
            'Una contraseña segura debe contener al menos 12 caracteres, aunque idealmente debería ser más larga (16 o más caracteres) para mayor protección.',
            'Ejemplo: En lugar de usar "María123", usa algo como "M@riA3_R3y_D3l_Mund0!".'
        ],
        icon: EnvelopeIcon,
    },
    {
        name: 'Complejidad',
        items: [
            'Combina diferentes tipos de caracteres: mayúsculas, minúsculas, números y símbolos.',
            'Ejemplo: ContraseñaSegura!2023 es más segura que Contraseña2023.'
        ],
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        name: 'Evitar datos personales',
        items: [
            'No incluyas nombres, fechas de nacimiento, números de teléfono o cualquier dato que alguien pueda relacionar contigo.',
            'Ejemplo: No uses "Juan1995", ya que un atacante podría deducirlo a partir de tus redes sociales.'
        ],
        icon: PhoneIcon,
    },
    {
        name: 'Evitar patrones predecibles',
        items: [
            'Contraseñas como "123456" o "qwerty" son extremadamente comunes y están en las listas de contraseñas más utilizadas y comprometidas.',
        ],
        icon: UserIcon,
    }
]
const features4 = [
    {
        name: 'No reutilizar contraseñas',
        items: [
            'Cada cuenta debe tener una contraseña única para evitar un efecto dominó. Si una contraseña es filtrada, no comprometerá otras cuentas.',
            'Ejemplo: Si usas la misma contraseña para tu correo y tu cuenta bancaria, un atacante que obtenga acceso a una podría comprometer la otra fácilmente.',
        ],
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Cambiar contraseñas regularmente',
        items: [
            'Es recomendable actualizar tus contraseñas cada 3 a 6 meses.',
            'Consejo práctico: Establece recordatorios en tu calendario para revisar y renovar tus contraseñas.',
        ],
        icon: DocumentTextIcon,
    },
    {
        name: 'Evitar compartir contraseñas',
        items: [
            'Nunca compartas tus contraseñas, ni siquiera con colegas o familiares.',
            'Si es absolutamente necesario, utiliza herramientas como Google Password Manager o LastPass para compartirlas de forma segura.',
        ],
        icon: EnvelopeIcon,
    },
    {
        name: 'Usar un administrador de contraseñas',
        items: [
            'Beneficios: Los administradores de contraseñas generan contraseñas únicas y las almacenan de manera cifrada. Además, solo necesitas recordar una contraseña maestra robusta.',
            'Ejemplos confiables: Bitwarden, 1Password, y Dashlane.'
        ],
        icon: LinkIcon,
    },
    {
        name: 'Activar autenticación en dos pasos (2FA)',
        items: [
            'Esto añade una capa extra de seguridad mediante un código temporal que debes introducir al iniciar sesión.',
            'Ejemplo de herramientas 2FA: Google Authenticator, Microsoft Authenticator, o códigos enviados por SMS.',
        ],
        icon: PaperAirplaneIcon,
    }
]
const features5 = [
    {
        name: 'Contraseñas demasiado cortas',
        description:
            'Ejemplo: 12345, abc12.',
        icon: LinkIcon,
    },
    {
        name: 'Contraseñas comunes',
        description:
            'Ejemplo: password, contraseña, admin.',
        icon: ArrowDownOnSquareStackIcon,
    },
    {
        name: 'Contraseñas basadas en datos personales',
        description:
            'Ejemplo: Juan1990, MiPerroFido.',
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Patrones predecibles',
        description:
            'Ejemplo: 111111, qwerty123.',
        icon: CheckBadgeIcon,
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
        "title": "¿Qué es una contraseña robusta?",
        "answer": [
            {
                "title": "Es una contraseña compuesta únicamente por letras.",
                "type": "incorrect"
            },
            {
                "title": "Es una contraseña diseñada para ser difícil de adivinar, utilizando longitud, complejidad y aleatoriedad.",
                "type": "correct"
            },
            {
                "title": "Es una contraseña que se reutiliza en todas las cuentas.",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Qué consecuencias puede tener usar una contraseña débil?",
        "answer": [
            {
                "title": "Mayor velocidad en los inicios de sesión.",
                "type": "incorrect"
            },
            {
                "title": "Mejor compatibilidad con sistemas antiguos.",
                "type": "incorrect"
            },
            {
                "title": "Acceso no autorizado a cuentas y robo de información confidencial.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Por qué no es suficiente usar la misma contraseña para todo?",
        "answer": [
            {
                "title": "Porque aumenta la posibilidad de olvidar la contraseña.",
                "type": "incorrect"
            },
            {
                "title": "Porque si una contraseña es comprometida, un atacante puede acceder a todas las cuentas asociadas.",
                "type": "correct"
            },
            {
                "title": "Porque los sitios web requieren contraseñas diferentes por obligación.",
                "type": "incorrect"
            }
        ]
    },
    {
        "title": "¿Cuál es la longitud mínima recomendada para una contraseña robusta?",
        "answer": [
            {
                "title": "Entre 6 y 8 caracteres.",
                "type": "incorrect"
            },
            {
                "title": "Menos de 6 caracteres si es compleja.",
                "type": "incorrect"
            },
            {
                "title": "Al menos 12 caracteres.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué elementos debe incluir una contraseña robusta?",
        "answer": [
            {
                "title": "Solo letras mayúsculas y números.",
                "type": "incorrect"
            },
            {
                "title": "Solo caracteres alfanuméricos.",
                "type": "incorrect"
            },
            {
                "title": "Letras mayúsculas, minúsculas, números y caracteres especiales.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Por qué evitar palabras comunes o información personal en contraseñas?",
        "answer": [
            {
                "title": "Porque no se pueden combinar con caracteres especiales.",
                "type": "incorrect"
            },
            {
                "title": "Porque no cumplen con requisitos técnicos de los sistemas.",
                "type": "incorrect"
            },
            {
                "title": "Porque son fáciles de adivinar mediante ataques de diccionario o ingeniería social.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué es un administrador de contraseñas?",
        "answer": [
            {
                "title": "Un servicio para bloquear el acceso a cuentas comprometidas.",
                "type": "incorrect"
            },
            {
                "title": "Un software que permite compartir contraseñas con otros usuarios.",
                "type": "incorrect"
            },
            {
                "title": "Una herramienta que almacena y genera contraseñas de manera segura.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué es la autenticación en dos pasos (2FA)?",
        "answer": [
            {
                "title": "Un sistema para crear contraseñas más largas.",
                "type": "incorrect"
            },
            {
                "title": "Un tipo de contraseña con doble longitud.",
                "type": "incorrect"
            },
            {
                "title": "Un método que combina algo que sabes (contraseña) con algo que tienes (como un código en tu móvil).",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Qué hacer si sospechas que tu contraseña ha sido comprometida?",
        "answer": [
            {
                "title": "Seguir utilizando la misma contraseña hasta que haya problemas.",
                "type": "incorrect"
            },
            {
                "title": "Ignorar el problema si no ves actividad sospechosa.",
                "type": "incorrect"
            },
            {
                "title": "Cambiar la contraseña inmediatamente y monitorear las cuentas asociadas.",
                "type": "correct"
            }
        ]
    },
    {
        "title": "¿Con qué frecuencia se deben cambiar las contraseñas?",
        "answer": [
            {
                "title": "Nunca, si la contraseña es robusta.",
                "type": "incorrect"
            },
            {
                "title": "Solo cuando el sistema lo solicite.",
                "type": "incorrect"
            },
            {
                "title": "Cuando hay indicios de compromiso o cada pocos meses para cuentas críticas.",
                "type": "correct"
            }
        ]
    }
];


const hanldeQuestionary = (points) => {
    updateUserCourse("strongpasswords", points)
}

export default function Page() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contraseñas Robustas</h2>

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
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-autenticacion-dos-factores_114360-5598.jpg?t=st=1737757144~exp=1737760744~hmac=5521d369e83399b450fe919af2e0e175a9768fafe457a5e6386b226611d1fd27&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion-seguro_114360-4685.jpg?t=st=1737757220~exp=1737760820~hmac=7a13933cdfded5197ca55d68589a01ce77370d8c003e03e170154cb8e800a71d&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100 "
                        />
                        <img
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            src="https://img.freepik.com/vector-gratis/mi-ilustracion-concepto-contrasena_114360-3864.jpg?t=st=1737757259~exp=1737760859~hmac=f604cf17ed1ae687a68f7447c47688a4cb59b6fdb844cd555a19ff2e5f150d26&w=740"
                            className="size-full object-cover rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Side of walnut card tray with card groove and recessed card area."
                            src="https://img.freepik.com/vector-gratis/restablecer-ilustracion-concepto-contrasena_114360-7866.jpg?t=st=1737757300~exp=1737760900~hmac=4da374b31560ee74a9bb6d33c6b4d0357e0dea2fa14e8346494a0d7e3ebeb041&w=1380"
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
                                    ¿Por qué son importantes las contraseñas robustas?
                                </p>
                                <p className="mt-6 text-lg/8 text-justify text-gray-600">
                                    Una contraseña robusta es aquella que ofrece una alta resistencia a intentos de adivinanza o ataques automatizados. Esto significa que no debe ser fácilmente descifrable por métodos
                                    como fuerza bruta, diccionario, o ingeniería social.
                                </p>
                                <p className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                    Impacto de contraseñas débiles
                                </p>
                                <p className="mt-6 text-md/8 text-justify text-gray-600">
                                    <span className="font-bold">Datos alarmantes:</span> Según estudios, el 81% de las filtraciones de datos están vinculadas a contraseñas débiles o comprometidas. Por ejemplo,
                                    contraseñas como "admin123" pueden ser descubiertas en cuestión de segundos.
                                </p>
                                <p className="mt-6 text-md/8 text-justify text-gray-600">
                                    <span className="font-bold">Escenarios reales:</span> Un ciberdelincuente podría usar tu contraseña comprometida para acceder a tus cuentas bancarias o plataformas empresariales,
                                    causando pérdidas financieras y legales.
                                </p>
                                <p className="mt-2 text-pretty font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                    Consecuencias de una brecha
                                </p>
                                <p className="mt-6 text-md/8 text-justify text-gray-600">
                                    <span className="font-bold">Pérdida financiera:</span> Robos directos o uso indebido de información bancaria.
                                </p>
                                <p className="mt-6 text-md/8 text-justify text-gray-600">
                                    <span className="font-bold">Compromiso de datos sensibles:</span> Acceso a información privada o estratégica, tanto personal como empresarial.
                                </p>
                                <p className="mt-6 text-md/8 text-justify text-gray-600">
                                    <span className="font-bold">Impacto reputacional:</span> Empresas pueden perder clientes debido a la percepción de falta de seguridad.
                                </p>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion-computadora_114360-23872.jpg?t=st=1737757392~exp=1737760992~hmac=46f10ed908abe9ee9a495e22aea4b980047ef4b473522513836dde8d534b240c&w=1380"
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
                                    ¿Qué hace que una contraseña sea robusta?
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">
                                    Características clave de una contraseña robusta
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="https://img.freepik.com/vector-gratis/concepto-abstracto-sistema-control-acceso_335657-3180.jpg?t=st=1737757521~exp=1737761121~hmac=72b82b89c02a21f8ff5fc822ec118053711d88e0cc6392595ba7663adb71e16c&w=740"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                <dl className=" max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
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
                                    Mejores prácticas para gestionar contraseñas
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-autenticacion-dos-factores_114360-5488.jpg?t=st=1737757497~exp=1737761097~hmac=05bb80c1bd8259998d0287a64954723e90d83d98100eba81ba6485029d10f5b8&w=740"
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
                <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-4 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-[#545E75]">CyberCap</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            Ejemplos de contraseñas inseguras
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
                                    <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Estas contraseñas pueden ser descifradas en segundos con herramientas automáticas que prueban combinaciones comunes.
                    </p>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex justify-center max-w-2xl">
                        <h2 className=" text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Errores comunes que debes evitar</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
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
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex justify-center max-w-2xl">
                        <h2 className=" text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Cómo crear y recordar contraseñas robustas</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts2.map((post) => (
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
            <Questionary questions={questions} hanldeQuestionary={hanldeQuestionary}/>
        </>
    )
}