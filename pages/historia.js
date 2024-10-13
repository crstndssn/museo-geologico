// pages/historia.js
import Image from 'next/image';

import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Historia = () => {
    return (
        <>
            <Nav />
            <div id="about-us" className="py-7 bg-amarillo text-black">
                <div  id='reseña' className="mt-6">
                    {/* Historia */}
                    <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse gap-12">
                        <div className="w-full flex flex-col gap-3 text-center">
                            <Image src="/historia/1.jpg" alt="Historia" width={400} height={250} className="rounded-sm w-full" />
                            <Image src="/historia/2.jpg" alt="Historia" width={400} height={250} className="rounded-sm w-full" />
                        </div>
                        <div className="w-full md:pb-6 text-center wow fadeInDown">
                            <h2 className="text-3xl font-semibold mb-4 text-center">HISTORIA</h2>
                            <p className="text-justify text-lg text-gray-700">
                                El área de geología adscrita al Programa de Ingeniería de petróleos desde sus comienzos lideró el Proyecto de Creación de este museo, cristalizado finalmente con la realización de la Primera Exhibición Científica Educativa del Ingeominas presentada en la Facultad de Ingeniería del 26 de septiembre al 29 de octubre de 1986 y coordinada por el profesor Jorge Arturo Camargo.
                                <br />
                                Durante los años 1986 a 1988 la Universidad Surcolombiana por intermedio del Programa de Ingeniería de Petróleos adquiere las vitrinas de exhibición, compra de rocas y minerales como material de apoyo académico, recibe donaciones del Ingeominas, entre otros.
                                <br />
                                En noviembre de 1988 se presenta en la Facultad de Ingeniería, el Proyecto para la creación del Museo. Durante los años 1989 a 1990 se prepara toda la infraestructura de museología, catalogación y clasificación de muestras.
                                <br />
                                La inauguración del museo localizado en el segundo piso de la Facultad de Ingeniería se llevó a cabo el 14 de Octubre de 1990 con presencia del Consejo Superior Universitario, la Administración Central e invitados especiales.
                                <br />
                                A partir del año 1989 ya con una base en la infraestructura del museo, la Universidad Surcolombiana ha presentado a manera de exhibiciones itinerantes varias exposiciones a solicitud del sector empresarial y político del Huila, dentro de las cuales cabe resaltar la participación en el evento “expociencia 1995” donde el museo fue condecorado, por la afluencia y el interés de las personas por su stand.
                            </p>
                        </div>
                    </div>

                    <div id='mision' className="bg-rojo">

                        <div className="container mx-auto flex flex-col md:flex-row gap-10 py-10">
                            {/* Misión */}
                            <div className="md:w-1/2 flex border-2 border-amarillo rounded-xl">
                                <div className="w-full py-6 wow fadeInDown">
                                    <div className="flex flex-col items-center p-4 rounded-sm my-3">
                                        <h2 className="text-4xl text-amarillo font-semibold mb-2">Misión</h2>
                                        <p className="text-center text-lg text-amarillo">
                                            El Museo geológico y del petróleo de la Universidad Surcolombiana es una institución al servicio de la comunidad universitaria, estudiantes de bachillerato y público en general de la región del sur de Colombia, cuya función es la de fomentar el interés por las ciencias de la tierra, desarrollar actividades encaminadas a la difusión del conocimiento de las riquezas minerales y energéticas del departamento del Huila, prestar servicios de asesoría y consultoría en las ramas de la geología y su relación con la industria del petróleo, así como adelantar y asesorar proyectos de investigación relacionados con la geología.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visión */}
                            <div className="md:w-1/2 flex border-2 border-amarillo rounded-xl">
                                <div className="w-full py-6 wow fadeInDown">
                                    <div className="flex flex-col items-center p-4 rounded-sm my-3">
                                        <h2 className="text-4xl text-amarillo font-semibold mb-2">Visión</h2>
                                        <p className="text-center text-lg text-amarillo">
                                            En 2024, el Museo Geológico y del Petróleo se mantiene como líder en la divulgación de las Geociencias en el sur de Colombia. Con altos estándares museológicos, ha mejorado la experiencia del visitante al integrar tecnologías interactivas que enriquecen el recorrido. Su equipo, comprometido con la calidad y calidez en la atención, ofrece un servicio inclusivo para todas las edades. Además, el museo impulsa programas de educación ambiental y ha fortalecido alianzas académicas nacionales e internacionales, consolidándose como un referente en investigación y divulgación científica, siempre con un enfoque en la sostenibilidad y el desarrollo comunitario.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Objetivos */}
                    <div id='objetivos' className="container mx-auto items-center flex flex-col-reverse md:flex-row-reverse my-10">
                        <div className="w-full md:w-1/2 py-6 wow fadeInDown">
                            <div className="flex flex-col items-center pl-10">
                                <h2 className="text-4xl font-semibold mb-4">Objetivos</h2>
                                <ul className="list-disc text-black text-left text-lg">
                                    <li>Promover el conocimiento sobre las ciencias de la tierra, esencial para programas de ingeniería, ciencias básicas, ingeniería ambiental y ecología en la Universidad Surcolombiana.</li>
                                    <li>Crear conciencia en la comunidad sobre el manejo de recursos mineros no renovables.</li>
                                    <li>Organizar el Museo en áreas de interés para facilitar la información a los usuarios.</li>
                                    <li>Fomentar redes de intercambio de información, material educativo y muestras con universidades y empresas a nivel nacional e internacional.</li>
                                    <li>Realizar exposiciones y conferencias sobre yacimientos minerales, temas petroleros y energéticos.</li>
                                    <li>Extender los servicios del Museo a diversas regiones del departamento en coordinación con las alcaldías y entidades culturales.</li>
                                    <li>Investigar el potencial minero y petrolero del país, especialmente del Huila, con asesoría del Museo.</li>
                                    <li>Apoyar la consolidación de redes de museos para facilitar la colaboración interinstitucional.</li> </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-6 text-center wow fadeInDown">
                            <Image src="/historia/4.jpg" alt="Objetivos" width={500} height={350} className="rounded-sm w-full" />
                        </div>
                    </div>

                    {/* Servicios */}
                    <div  id='servicios' className="container mx-auto flex flex-col md:flex-row my-10">
                        <div className="w-full md:w-1/2 py-6 wow fadeInDown">
                            <div className="flex flex-col items-center pl-10">
                            <h2 className="text-4xl font-semibold mb-4">Servicios</h2>
                            <ul className="list-disc text-black text-left text-lg">
                                    <li>Visitas de campo para evaluación de prospectos mineros y geotécnicos</li>
                                    <li>Cartografía geológica</li>
                                    <li>Clasificación de rocas y minerales</li>
                                    <li>Análisis mineralógico de ripios</li>
                                </ul>
                                <div className="mt-6">
                                    <a href="/servicios" className="rounded-full border-2 border-rojo bg-rojo hover:bg-amarillo text-amarillo hover:text-rojo py-3 px-5">
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
            </div>
            <Footer />
        </>
    );
};

export default Historia;
