'use client'
import {useEffect, useState} from "react";

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

export default function Index() {

  const [news, setNews] = useState([])
  useEffect(() => {
    getNews()
  }, []);

  return (
      <>
        <div className="min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-3xl text-center font-bold text-gray-900 mb-20">¿Que quieres aprender hoy?</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <img
                          alt={callout.imageAlt}
                          src={callout.imageSrc}
                          className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                      />
                      <h3 className="mt-6 text-lg font-bold text-gray-900">
                        <a href={callout.href}>
                          <span className="absolute inset-0"/>
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{callout.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center">Conoce un poco sobre noticias de Ciberseguridad!</h2>
        <div className="grid grid-cols-3 gap-10 p-20">
          {
            news?.length > 0 ? news?.map((article, index) => (
                <article key={article.publishedAt + index} className="flex bg-white transition hover:shadow-xl">
                  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        dateTime={article.publishedAt}
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                      <span>2022</span>
                      <span className="w-px flex-1 bg-gray-900/10"></span>
                      <span>Oct 10</span>
                    </time>
                  </div>

                  <div className="hidden sm:block sm:basis-56">
                    <img
                        alt={article.title}
                        src={article.urlToImage}
                        className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <a href={ article.url }>
                        <h3 className="font-bold uppercase text-gray-900">
                          {article.title}
                        </h3>
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        { article.description }
                      </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                      <a
                          href={ article.url }
                          className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                      >
                        Leer Noticia
                      </a>
                    </div>
                  </div>
                </article>
            )) : <p>No hay noticias</p>
          }
        </div>
      </>
  )

  async function getNews() {
    const data = await fetch('https://newsapi.org/v2/everything?q=cybersecurity&language=es&apiKey=2e030a5330b5468e882d9dfd28d534ba').then((response) => response.json()).then((articlesResponse) => {
      return articlesResponse.articles
    })
    console.log(data)
    setNews(data)
  }

}