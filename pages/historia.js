// pages/historia.js
import Image from 'next/image';

import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Historia = () => {
    return (
        <>
            <Nav />
            <section id="about-us" className="py-12 bg-white text-black">
                <div className="container mx-auto">
                    {/* Historia */}
                    <div className="flex">
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown">
                            <h2 className="text-2xl font-bold mb-4">HISTORIA</h2>
                            <p className="text-justify text-gray-700">
                                El área de geología adscrita al Programa de Ingeniería de petróleos desde sus comienzos lideró el Proyecto de Creación de este museo, cristalizado finalmente con la realización de la Primera Exhibición Científica Educativa del Ingeominas presentada en la Facultad de Ingeniería del 26 de septiembre al 29 de octubre de 1986 y coordinada por el profesor Jorge Arturo Camargo.
                                Durante los años 1986 a 1988 la Universidad Surcolombiana por intermedio del Programa de Ingeniería de Petróleos adquiere las vitrinas de exhibición, compra de rocas y minerales como material de apoyo académico, recibe donaciones del Ingeominas, entre otros.
                                En noviembre de 1988 se presenta en la Facultad de Ingeniería, el Proyecto para la creación del Museo. Durante los años 1989 a 1990 se prepara toda la infraestructura de museología, catalogación y clasificación de muestras.
                                La inauguración del museo localizado en el segundo piso de la Facultad de Ingeniería se llevó a cabo el 14 de Octubre de 1990 con presencia del Consejo Superior Universitario, la Administración Central e invitados especiales.
                                A partir del año 1989 ya con una base en la infraestructura del museo, la Universidad Surcolombiana ha presentado a manera de exhibiciones itinerantes varias exposiciones a solicitud del sector empresarial y político del Huila, dentro de las cuales cabe resaltar la participación en el evento “expociencia 1995” donde el museo fue condecorado, por la afluencia y el interés de las personas por su stand.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center">
                            <Image src="/historia/1.jpg" alt="Historia" width={400} height={250} className="rounded-lg" />
                            <div className="my-6">
                                <Image src="/historia/2.jpg" alt="Historia" width={400} height={250} className="rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Misión */}
                    <div className="flex">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown">
                            <div className="flex flex-col items-center">
                                <i className="fa fa-flag text-4xl mb-4"></i>
                                <h2 className="text-2xl font-bold mb-4">Misión</h2>
                                <p className="text-justify text-gray-700">
                                    El Museo geológico y del petróleo de la Universidad Surcolombiana es una institución al servicio de la comunidad universitaria...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="flex">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown">
                            <div className="flex flex-col items-center">
                                <i className="fa fa-eye text-4xl mb-4"></i>
                                <h2 className="text-2xl font-bold mb-4">Visión</h2>
                                <p className="text-justify text-gray-700">
                                    Para el año 2020 el Museo Geológico y del Petróleo continuará siendo el servicio de extensión Universitaria líder en el área de las Geociencias...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Objetivos */}
                    <div className="flex">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown">
                            <div className="flex flex-col items-center">
                                <i className="fa fa-bullseye text-4xl mb-4"></i>
                                <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
                                <ul className="list-disc text-gray-700 text-left pl-5">
                                    <li>Facilitar y propiciar un mayor conocimiento acerca de las ciencias de la tierra...</li>
                                    <li>Crear conciencia en la comunidad universitaria sobre el manejo de recursos no renovables...</li>
                                    <li>Motivar a la población estudiantil para interesarse en las ciencias de la tierra...</li>
                                    <li>Fomentar redes de intercambio de información y muestras con universidades...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown">
                            <Image src="/historia/4.jpg" alt="Objetivos" width={500} height={350} className="rounded-lg" />
                        </div>
                    </div>

                    {/* Servicios */}
                    <div className="flex">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown">
                            <div className="flex flex-col items-center">
                                <i className="fa fa-briefcase text-4xl mb-4"></i>
                                <h2 className="text-2xl font-bold mb-4">Servicios</h2>
                                <ul className="list-disc text-gray-700 text-left pl-5">
                                    <li>Visitas de campo para evaluación de prospectos mineros y geotécnicos</li>
                                    <li>Cartografía geológica</li>
                                    <li>Clasificación de rocas y minerales</li>
                                    <li>Análisis mineralógico de ripios</li>
                                </ul>
                                <div className="mt-6">
                                    <a href="/servicios" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">
                                        LEER MÁS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown">
                            <Image src="/historia/3.jpg" alt="Servicios" width={600} height={400} className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Historia;
