// pages/organizacion.js
import Image from 'next/image';
import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Organizacion = () => {
    return (
        <>
            <Nav />
            <section id="about-us" className="py-10 bg-[#FEFCF2]">
                <div className="container mx-auto">
                    <div className="text-center wow fadeInDown mb-10">
                        <h2 className="text-2xl font-bold">Estructura organizacional</h2>
                        <Image
                            src="/ORGANIGRAMA_MUSEO.jpg"
                            alt="Organigrama Museo"
                            width={500}
                            height={800}
                            className="mx-auto"
                        />
                    </div>

                    {/* Usando Flexbox para las columnas */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {/* Columna para el director */}
                        <div className="w-full md:w-1/3 text-center wow fadeInDown">
                            <div className="clients-comments">
                                <Image
                                    src="/responsables/RobertoVargasCuervo.jpg"
                                    alt="Roberto Vargas Cuervo"
                                    className="rounded-full mx-auto"
                                    width={150}
                                    height={150}
                                />
                                <h4 className="mt-4">DIRECTOR: ROBERTO VARGAS CUERVO</h4>
                                <h4><span>Geólogo Universidad Nacional de Colombia</span></h4>
                            </div>
                        </div>

                        {/* Columna para Ingrid */}
                        <div className="w-full md:w-1/3 text-center wow fadeInDown">
                            <div className="clients-comments">
                                <Image
                                    src="/responsables/IngridMunozQuijano.jpg"
                                    alt="Ingrid Natalia Muñoz Quijano"
                                    className="rounded-full mx-auto"
                                    width={150}
                                    height={150}
                                />
                                <h4 className="mt-4">INGRID NATALIA MUÑOZ QUIJANO</h4>
                                <h4><span>Geóloga Universidad de Caldas</span></h4>
                            </div>
                        </div>

                        {/* Columna para Jorge */}
                        <div className="w-full md:w-1/3 text-center wow fadeInDown">
                            <div className="clients-comments">
                                <Image
                                    src="/responsables/JorgeEduardoMayorga.jpg"
                                    alt="Jorge Orlando Mayorga Bautista"
                                    className="rounded-full mx-auto"
                                    width={150}
                                    height={150}
                                />
                                <h4 className="mt-4">JORGE ORLANDO MAYORGA BAUTISTA</h4>
                                <h4><span>Ingeniero Catastral y Geodesta</span></h4>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center font-bold my-10">PROFESIONALES DEL ÁREA DE GEOLOGÍA EN ASESORIA EXTERNA</h3>

                    {/* Usando Grid para la tabla de profesionales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4>EDNA MAGALY CALDERON CALDERON</h4>
                            <h4><b><i>Comunicadora Social y Periodista - Universidad Surcolombiana</i></b></h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4>JERSAHÍN LAMILLA GALINDO</h4>
                            <h4><b><i>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</i></b></h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4>ISAURO TRUJILLO</h4>
                            <h4><b><i>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</i></b></h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4>CARLOS ADÁN RUBIO LUNA</h4>
                            <h4><b><i>Geólogo - Universidad Nacional de Colombia - Bogotá, D.C.</i></b></h4>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
                            <h4>OSCAR PEÑA VELÁSQUEZ</h4>
                            <h4><b><i>Ingeniero Forestal - Universidad del Cauca</i></b></h4>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Organizacion;
