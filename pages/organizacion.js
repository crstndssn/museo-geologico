// pages/organizacion.js
import Image from 'next/image';
import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Organizacion = () => {
    return (
        <>
            <Nav />
            <div className='bg-[#FEFCF2] px-4 md:px-0'>
                <h2 class="text-3xl md:text-4xl font-semibold text-center pt-8">Estructura organizacional</h2>
                <section id="about-us" className="py-10 flex flex-col lg:flex-row md:gap-20 container mx-auto">
                    <div className="w-full lg:w-1/2">
                        <div className="text-center wow fadeInDown mb-10">
                            <Image
                                src="/organigrama.svg"
                                alt="Organigrama Museo"
                                width={500}
                                height={800}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        {/* Usando Flexbox para las columnas */}
                        <div className="flex flex-col md:flex-row justify-center gap-10 mb-8">
                            {/* Columna para el director */}
                            <div className="w-full">
                                <div className="flex flex-col justify-center align-center text-center">
                                    <Image
                                        src="/responsables/RobertoVargasCuervo.jpg"
                                        alt="Roberto Vargas Cuervo"
                                        className="rounded-full mx-auto border-4 border-rojo"
                                        width={150}
                                        height={150}
                                    />
                                    <h4 className="mt-4 font-semibold">DIRECTOR: ROBERTO VARGAS CUERVO</h4>
                                    <p>Geólogo Universidad Nacional de Colombia</p>
                                </div>
                            </div>

                            {/* Columna para Ingrid */}
                            <div className="w-full  text-center wow fadeInDown">
                                <div className="clients-comments">
                                    <Image
                                        src="/responsables/IngridMunozQuijano.jpg"
                                        alt="Ingrid Natalia Muñoz Quijano"
                                        className="rounded-full mx-auto border-4 border-rojo"
                                        width={150}
                                        height={150}
                                    />
                                    <h4 className="mt-4 font-semibold">INGRID NATALIA MUÑOZ QUIJANO</h4>
                                    <p>Geóloga Universidad de Caldas</p>
                                </div>
                            </div>

                            {/* Columna para Jorge */}
                            <div className="w-full  text-center wow fadeInDown">
                                <div className="clients-comments">
                                    <Image
                                        src="/responsables/JorgeEduardoMayorga.jpg"
                                        alt="Jorge Orlando Mayorga Bautista"
                                        className="rounded-full mx-auto border-4 border-rojo"
                                        width={150}
                                        height={150}
                                    />
                                    <h4 className="mt-4 font-semibold">JORGE ORLANDO MAYORGA BAUTISTA</h4>
                                    <p>Ingeniero Catastral y Geodesta</p>
                                </div>
                            </div>
                        </div>

                        {/* Usando Grid para la tabla de profesionales */}
                        <div className="flex flex-col gap-6">
                            <div className="p-6 rounded-lg border-2 border-rojo">
                                <h4 className='font-bold'>EDNA MAGALY CALDERON CALDERON</h4>
                                <p>Comunicadora Social y Periodista - Universidad Surcolombiana</p>
                            </div>
                            <div className="p-6 rounded-lg border-2 border-rojo">
                                <h4 className='font-bold'>JERSAHÍN LAMILLA GALINDO</h4>
                                <p>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</p>
                            </div>
                            <div className="p-6 rounded-lg border-2 border-rojo">
                                <h4 className='font-bold'>ISAURO TRUJILLO</h4>
                                <h4>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</h4>
                            </div>
                            <div className="p-6 rounded-lg border-2 border-rojo">
                                <h4 className='font-bold'>CARLOS ADÁN RUBIO LUNA</h4>
                                <p>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</p>
                            </div>
                            <div className="p-6 rounded-lg border-2 border-rojo">
                                <h4 className='font-bold'>OSCAR PEÑA VELÁSQUEZ</h4>
                                <p>Ingeniero Forestal - Universidad del Cauca</p>
                            </div>
                        </div>

                    </div>
                </section>
               
            </div>
            <Footer />
        </>

    );
};

export default Organizacion;
