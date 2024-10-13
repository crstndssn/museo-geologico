// pages/red.js
import Image from 'next/image';
import { useState } from 'react';
import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Red = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 24;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className='bg-[#FEFCF2]'>
            <Nav />
            <section id="red" className="py-10 text-black container mx-auto">


                <div className="flex flex-wrap mt-10">
                    {/* Columna izquierda */}
                    <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0 wow fadeInDown text-center">
                        <div className="container mx-auto text-center">
                            <h2 className="text-2xl mb-4 font-bold">RED DEPARTAMENTAL DE MUSEOS DEL HUILA</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-justify">
                            La Red Departamental de Museos del Huila, creada en el año 2009, conformada por 19 (23) museos, es un mecanismo integrador que pretende que el esfuerzo que realizan los directores de los museos públicos y privados del Huila, en la defensa del patrimonio cultural y natural de nuestro departamento, con las diferentes colecciones que los integran, se conviertan en un mecanismo idóneo a través de los cuales se logre la concientización permanente del...
                        </p>
                    </div>

                    {/* Columna derecha con el carrusel */}
                    <div className="w-full md:w-1/2 px-4 wow fadeInDown text-center">
                        <div className="relative">
                            {/* Indicadores */}
                            <div className="flex justify-center space-x-2 mb-4 absolute bottom-[-39px] z-10 left-0 right-0">
                                {[...Array(totalSlides)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-rojo" : "bg-rojo/20"}`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>

                            {/* Slides */}
                            <div className="relative">
                                <Image
                                    src={`/cartilla_museos/${currentIndex + 1}.jpg`}
                                    alt={`Slide ${currentIndex + 1}`}
                                    width={500}
                                    height={800}
                                    className="mx-auto"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <button onClick={handlePrev} className="bg-rojo text-amarillo w-10 h-10 flex justify-center items-center rounded-full">
                                        <div
                                            className='rotate-90 mr-[2px]'
                                            style={{
                                                width: 0,
                                                height: 0,
                                                borderLeft: '10px solid transparent',
                                                borderRight: '10px solid transparent',
                                                borderTop: '10px solid #FEFCF2',
                                            }}
                                        />
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <button onClick={handleNext} className="bg-rojo text-amarillo w-10 h-10 flex justify-center items-center rounded-full">
                                        <div
                                            className='-rotate-90 ml-[2px]'
                                            style={{
                                                width: 0,
                                                height: 0,
                                                borderLeft: '10px solid transparent',
                                                borderRight: '10px solid transparent',
                                                borderTop: '10px solid #FEFCF2',
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
};

export default Red;
