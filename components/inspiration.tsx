'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Author01 from '@/public/images/author-01.jpg'
import Chb12 from '@/public/images/chb1-2.jpg'
import Chb13 from '@/public/images/chb1-3.jpg'
import Chb1 from '@/public/images/chb1.jpg'
import Chb3 from '@/public/images/chb3.jpg'
import Chb4 from '@/public/images/chb4.jpg'
import Chb52 from '@/public/images/chb5-2.jpg'
import Chb53 from '@/public/images/chb5-3.jpg'
import Chb54 from '@/public/images/chb5-4.jpg'
import Chb5 from '@/public/images/chb5.jpg'
import Chb62 from '@/public/images/chb6-2.jpg'
import Chb6 from '@/public/images/chb6.jpg'
import Chb72 from '@/public/images/chb7-2.jpg'
import Chb73 from '@/public/images/chb7-3.jpg'
import Chb7 from '@/public/images/chb7.jpg'
import Chb82 from '@/public/images/chb8-2.jpg'
import Chb8 from '@/public/images/chb8.jpg'
import Chb92 from '@/public/images/chb9-2.jpg'
import Chb93 from '@/public/images/chb9-3.jpg'
import Chb9 from '@/public/images/chb9.jpg'
import Ext3 from '@/public/images/ext-3.jpg'
import Ext6 from '@/public/images/ext6.jpg'
import Ext7 from '@/public/images/ext7.jpg'
import Cui4 from '@/public/images/cui4.jpg'
import Cui5 from '@/public/images/cui5.jpg'
import Cui7 from '@/public/images/cui7.jpg'
import Cui9 from '@/public/images/cui9.jpg'
import Sdb1 from '@/public/images/sdb1.jpg'
import Sdb5 from '@/public/images/sdb5.jpg'
import Sdb6 from '@/public/images/sdb6.jpg'
import Sdb7 from '@/public/images/sdb7.jpg'
import Sdb9 from '@/public/images/sdb9.jpg'

export default function Inspiration() {

  const [category, setCategory] = useState<string>('0')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <svg className="fill-gray-300  hidden md:block absolute -ml-7 -mt-8" width="22" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z" fillRule="evenodd" />
              </svg>
              <h2 className="h2 font-cabinet-grotesk">Photos des studios</h2>
            </div>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '0' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('0')}>
                  <div className="flex items-center justify-center">
                    <span>Toutes</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '0' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>27</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '1' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('1')}>
                  <div className="flex items-center justify-center">
                    <span>Chambres</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '1' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>19</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '2' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('2')}>
                  <div className="flex items-center justify-center">
                    <span>Extérieur</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '2' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>3</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '3' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('3')}>
                  <div className="flex items-center justify-center">
                    <span>Cuisine</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '3' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>4</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '4' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('4')}>
                  <div className="flex items-center justify-center">
                    <span>Salle de bain</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '4' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>5</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Gallery */}
            <div className="relative">
              {/* Images grid */}
              <div className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start" data-aos-id-inpspiration>
                {/* Chambre images */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]">
                  <Image className="w-full aspect-square object-cover" src={Chb1} width="352" height="352" alt="Chambre 1" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="100">
                  <Image className="w-full aspect-square object-cover" src={Chb12} width="352" height="352" alt="Chambre 1-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="200">
                  <Image className="w-full aspect-square object-cover" src={Chb13} width="352" height="352" alt="Chambre 1-3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="300">
                  <Image className="w-full aspect-square object-cover" src={Chb3} width="352" height="352" alt="Chambre 3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="400">
                  <Image className="w-full aspect-square object-cover" src={Chb4} width="352" height="352" alt="Chambre 4" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="500">
                  <Image className="w-full aspect-square object-cover" src={Chb5} width="352" height="352" alt="Chambre 5" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="600">
                  <Image className="w-full aspect-square object-cover" src={Chb52} width="352" height="352" alt="Chambre 5-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="700">
                  <Image className="w-full aspect-square object-cover" src={Chb53} width="352" height="352" alt="Chambre 5-3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="800">
                  <Image className="w-full aspect-square object-cover" src={Chb54} width="352" height="352" alt="Chambre 5-4" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="900">
                  <Image className="w-full aspect-square object-cover" src={Chb6} width="352" height="352" alt="Chambre 6" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1000">
                  <Image className="w-full aspect-square object-cover" src={Chb62} width="352" height="352" alt="Chambre 6-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1100">
                  <Image className="w-full aspect-square object-cover" src={Chb7} width="352" height="352" alt="Chambre 7" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1200">
                  <Image className="w-full aspect-square object-cover" src={Chb72} width="352" height="352" alt="Chambre 7-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1300">
                  <Image className="w-full aspect-square object-cover" src={Chb73} width="352" height="352" alt="Chambre 7-3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1400">
                  <Image className="w-full aspect-square object-cover" src={Chb8} width="352" height="352" alt="Chambre 8" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1500">
                  <Image className="w-full aspect-square object-cover" src={Chb82} width="352" height="352" alt="Chambre 8-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1600">
                  <Image className="w-full aspect-square object-cover" src={Chb9} width="352" height="352" alt="Chambre 9" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1700">
                  <Image className="w-full aspect-square object-cover" src={Chb92} width="352" height="352" alt="Chambre 9-2" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="1800">
                  <Image className="w-full aspect-square object-cover" src={Chb93} width="352" height="352" alt="Chambre 9-3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Chambre</div>
                          <div className="text-xs text-white opacity-60 truncate">Studio 9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Extérieur images */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]">
                  <Image className="w-full aspect-square object-cover" src={Ext3} width="352" height="352" alt="Extérieur 3" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Extérieur</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="100">
                  <Image className="w-full aspect-square object-cover" src={Ext6} width="352" height="352" alt="Extérieur 6" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Extérieur</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="200">
                  <Image className="w-full aspect-square object-cover" src={Ext7} width="352" height="352" alt="Extérieur 7" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Extérieur</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Cuisine images */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '3'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]">
                  <Image className="w-full aspect-square object-cover" src={Cui4} width="352" height="352" alt="Cuisine 4" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Cuisine</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '3'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="100">
                  <Image className="w-full aspect-square object-cover" src={Cui5} width="352" height="352" alt="Cuisine 5" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Cuisine</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '3'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="200">
                  <Image className="w-full aspect-square object-cover" src={Cui7} width="352" height="352" alt="Cuisine 7" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Cuisine</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '3'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="300">
                  <Image className="w-full aspect-square object-cover" src={Cui9} width="352" height="352" alt="Cuisine 9" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Cuisine</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Salle de bain images */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '4'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]">
                  <Image className="w-full aspect-square object-cover" src={Sdb1} width="352" height="352" alt="Salle de bain 1" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Salle de bain</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '4'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="100">
                  <Image className="w-full aspect-square object-cover" src={Sdb5} width="352" height="352" alt="Salle de bain 5" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Salle de bain</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '4'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="200">
                  <Image className="w-full aspect-square object-cover" src={Sdb6} width="352" height="352" alt="Salle de bain 6" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Salle de bain</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '4'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="300">
                  <Image className="w-full aspect-square object-cover" src={Sdb7} width="352" height="352" alt="Salle de bain 7" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Salle de bain</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '4'].includes(category) ? { display: 'none' } : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="400">
                  <Image className="w-full aspect-square object-cover" src={Sdb9} width="352" height="352" alt="Salle de bain 9" />
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute inset-0 -mt-4 bg-linear-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    <div className="relative flex justify-between">
                      <div className="flex items-center">
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Salle de bain</div>
                          <div className="text-xs text-white opacity-60 truncate">Vue 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* CTA */}
              <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-linear-to-t from-white to-transparent">
                <div className="flex h-full items-end justify-center">
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-xs mb-6" href="/signup">Join The Community</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}