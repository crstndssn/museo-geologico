// pages/distribucion.js
import Image from 'next/image';

import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Distribucion = () => {
    return (
        <>
            <Nav />
            <section id="about-us" className="py-12 bg-amarillo text-black">
                <div className="container mx-auto">
                    <div className="text-center mb-5 mb:mb-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <h2 className="text-4xl font-semibold">Distribución</h2>
                    </div>

                    {/* Sección Geología económica */}
                    <div className="flex flex-wrap mb-5 md:mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-3xl font-semibold text-center mb-4">Geología económica</h2>
                            <p className="text-justify text-lg">
                            La sección de geología económica consta de más de 124 muestras de minerales y más de 300 rocas de todas partes del país y algunas muestras del exterior. Los minerales se han organizado en dos vitrinas y clasificados de acuerdo a los grupos químicos en: Elementos nativos, sulfuros, óxidos, carbonatos, hidróxidos, haluros, silicatos y sulfatos. Además esta sección cuenta con 2 módulos: el primero en el que se muestran algunos minerales de mena y el segundo el módulo de Piedras Semipreciosas muestra el proceso de corte, tallado y pulido de una gran variedad de minerales, rocas y fósiles que al someterlas a este proceso, muestran la inmensa belleza que esconden en su estado natural, convirtiéndose de esta forma en las llamadas “Piedras Semipreciosas”.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/1.jpg" alt="Geología económica" width={400} height={250} className="rounded-sm w-full" />
                        </div>
                    </div>

                    {/* Sección Geología histórica */}
                    <div className="flex flex-wrap mb-5 md:mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-3xl font-semibold text-center mb-4">Geología histórica</h2>
                            <p className="text-justify text-lg">
                            La sección de geología histórica está constituida principalmente por fósiles de organismos animales y de algunos vegetales. La gran mayoría de las piezas fósiles de vertebrados que se encuentran en el museo provienen del Desierto de la Tatacoa, aunque también existen fósiles colectados en otras regiones del país. También se tienen muestras de los xilópalos del Huila de diferentes clases, edades, formas y tamaños.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/2.jpg" alt="Geología histórica" width={400} height={250} className="rounded-sm w-full" />
                        </div>
                    </div>

                    {/* Sección Geología del petróleo */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-3xl font-semibold text-center mb-4">Geología del petróleo</h2>
                            <p className="text-justify text-lg">
                            La sección de Petrografía está organizada en tres vitrinas y cuatros módulos, una para cada tipo de rocas a saber: Rocas Ígneas, Rocas Sedimentarias y Rocas Metamórficas. Su catalogación y clasificación está basada en criterios científicos y normas técnicas establecidas para este fin. Esta sección de geología económica se encuentra apoyada por cuadros y afiches de cristalografía, propiedades físicas, usos de los minerales y cuadros de clasificación petrográfica de los tres tipos de rocas.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/3.jpg" alt="Geología del petróleo" width={400} height={250} className="rounded-sm w-full" />
                        </div>
                    </div>

                    {/* Sección Mundo del petróleo */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-2xl font-semibold text-center mb-4">Mundo del petróleo</h2>
                            <p className="text-justify text-lg">
                            naturales más importantes del Departamento del Huila, al igual que mostrar los diferentes procesos llevados a cabo en las actividades petroleras. Esta sección está conformada por cuatro módulos: El primero muestra las rocas almacén donde se entrampa comúnmente el petróleo, el segunda expone las rocas sellos y generadoras, en la tercera se muestran los principales componentes y aditivos de los diferentes fluidos de perforación, algunos derivados del petróleo, al igual que los núcleos que permiten obtener las características petrofísicas de la roca. Además, se poseen dos maquetas donde se representan las facilidades de producción, con su respectivo plano P & ID, y la torre de perforación con un cuadro que muestra sus principales componentes. De igual forma se posee una representación del tradicional bombeo mecánico y una sección de bombas, utilizados en diferentes sistemas de levantamiento para la extracción del crudo.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/4.jpg" alt="Mundo del petróleo" width={250} height={400} className="rounded-sm w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Distribucion;
