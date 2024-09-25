// pages/distribucion.js
import Image from 'next/image';

import '../src/app/globals.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Distribucion = () => {
    return (
        <>
            <Nav />
            <section id="about-us" className="py-12 bg-white text-black">
                <div className="container mx-auto">
                    <div className="text-center mb-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <h2 className="text-3xl font-bold">Distribución</h2>
                        <p className="text-lg text-gray-600 mt-2">Explora nuestras secciones de geología</p>
                    </div>

                    {/* Sección Geología económica */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-2xl font-semibold text-center mb-4">Geología económica</h2>
                            <p className="text-justify text-gray-700">
                                La sección de geología económica consta de más de 124 muestras de minerales y más de 300 rocas de todas
                                partes del país y algunas muestras del exterior...
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/1.jpg" alt="Geología económica" width={400} height={250} className="rounded-lg" />
                        </div>
                    </div>

                    {/* Sección Geología histórica */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/2.jpg" alt="Geología histórica" width={400} height={250} className="rounded-lg" />
                        </div>
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-2xl font-semibold text-center mb-4">Geología histórica</h2>
                            <p className="text-justify text-gray-700">
                                La sección de geología histórica está constituida principalmente por fósiles de organismos animales y de
                                algunos vegetales...
                            </p>
                        </div>
                    </div>

                    {/* Sección Geología del petróleo */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-2xl font-semibold text-center mb-4">Geología del petróleo</h2>
                            <p className="text-justify text-gray-700">
                                La sección de Petrografía está organizada en tres vitrinas y cuatros módulos, una para cada tipo de rocas...
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/3.jpg" alt="Geología del petróleo" width={400} height={250} className="rounded-lg" />
                        </div>
                    </div>

                    {/* Sección Mundo del petróleo */}
                    <div className="flex flex-wrap mb-12">
                        <div className="w-full md:w-1/2 p-6 text-center wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <Image src="/distribucion/4.jpg" alt="Mundo del petróleo" width={250} height={400} className="rounded-lg" />
                        </div>
                        <div className="w-full md:w-1/2 p-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <h2 className="text-2xl font-semibold text-center mb-4">Mundo del petróleo</h2>
                            <p className="text-justify text-gray-700">
                                Esta sección está conformada por cuatro módulos: El primero muestra las rocas almacén donde se entrampa
                                comúnmente el petróleo...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Distribucion;
