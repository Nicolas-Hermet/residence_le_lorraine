'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [options, setOptions] = useState<boolean>(true)

  return (
    <section className="relative border-t border-gray-100">
      {/* Bg gradient */}
      <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-gray-50 to-white h-1/2 pointer-events-none -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk">Vous partez en cure ? Ne payez pas plus que nécessaire</h2>
          </div>
          {/* Pricing tables */}
          <div>
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[22rem] m-auto mb-8 lg:mb-16">
              <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded-full">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                  <span className={`absolute inset-0 w-1/2 bg-white rounded-full shadow-sm transform transition duration-150 ease-in-out ${options ? 'translate-x-0' : 'translate-x-full'}`} />
                </span>
                <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${options && 'text-gray-500'}`} onClick={() => setOptions(true)}>Toutes options <span className="text-green-500">-5%</span>
                </button>
                <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${options && 'text-gray-500'}`} onClick={() => setOptions(false)}>Sans option</button>
              </div>
            </div>
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-3xl pt-4">
              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full p-6" data-aos="fade-right">
                <div className="mb-6">
                  <div className="font-cabinet-grotesk text-xl font-semibold mb-1">Basse saison</div>
                  <div className="font-cabinet-grotesk inline-flex items-baseline mb-2">
                    <span className="text-5xl font-bold">{ options ? '650€' : '600' }</span>
                  </div>
                  <div className="text-gray-500 mb-6">De avril à juin, ou de septembre à octobre. Profitez de la douceur de vivre, sans la foule.</div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 w-full shadow-xs" href="/contact">Réservez votre logement</Link>
                </div>
                <div className="font-medium mb-4">Inclus dans le tarif</div>
                <ul className="text-gray-500 space-y-3 grow">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Taxe de séjour pour 2 personnes (57€)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Arrivée la veille ou départ tardif pour le même prix</span>
                  </li>
                </ul>
                { !options && (
                  <>
                    <div className="font-medium mt-6">En option</div>
                  </>
                )}
                <ul className="mt-3 text-gray-500 space-y-3 grow">
                  <li className="flex items-center">
                    { options && (
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    )}
                    <span>Linge de maison pour le séjour (25€)</span>
                  </li>
                  <li className="flex items-center">
                    { options && (
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    )}
                    <span>Ménage complet après votre départ (60€)</span>
                  </li>
                </ul>
              </div>
              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-left">
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex items-center text-sm font-semibold py-1 px-4 text-emerald-600 bg-emerald-200 rounded-full">Le plus demandé</div>
                </div>
                <div className="mb-6">
                  <div className="font-cabinet-grotesk text-xl text-gray-100 font-semibold mb-1">Haute saison</div>
                  <div className="font-cabinet-grotesk text-gray-100 inline-flex items-baseline mb-2">
                    <span className="text-3xl font-medium text-gray-400">$</span>
                    <span className="text-5xl font-bold">{options ? '793' : '750'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400 mb-6">De Juillet à Aout.</div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 w-full shadow-xs" href="/contact">Réservez votre logement.</Link>
                </div>
                <div className="font-medium text-gray-100 mb-4">Inclus dans le tarif</div>
                <ul className="text-gray-400 space-y-3 grow">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Taxe de séjour pour 2 personnes (57€)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Arrivée la veille ou départ tardif pour le même prix</span>
                  </li>
                  </ul>
                  { !options && (
                  <>
                    <div className="font-medium text-gray-100 mt-6">En option</div>
                  </>
                )}
                <ul className="mt-3 text-gray-400 space-y-3 grow">
                  <li className="flex items-center">
                    { options && (
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    )}
                    <span>Linge de maison pour le séjour (25€)</span>
                  </li>
                  <li className="flex items-center">
                    { options && (
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    )}
                    <span>Ménage complet après votre départ (60€)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}