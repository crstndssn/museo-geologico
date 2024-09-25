// components/Navbar.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Importar useRouter
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(); // Inicializar useRouter para obtener la ruta actual

    // Efecto para manejar el overflow del body
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // Restaurar al desmontar
        };
    }, [isOpen]);

    // Verificar si la ruta es la actual
    const isActive = (path) => router.pathname === path;

    return (
        <>
            <div className="bg-[#8F141B]">
                <h1 className="text-5xl text-center py-10">MUSEO GEOLOGICO Y DEL PETROLEO</h1>
            </div>

            <nav className="flex justify-between items-center py-3 bg-[#FEFCF2] z-10 px-0 border-b-2 border-[#8F141B] w-full">
                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-20">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#8F141B] hover:text-[#8F141B] focus:outline-none focus:text-blue-700">
                        {isOpen ? (
                            <svg className="w-10 h-10 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-10 h-10 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden w-full md:flex md:items-center md:space-x-10 md:text-lg md:font-medium md:border-b md:border-[#8F141B] py-2 z-10 mb-12">
                    <ul className="hidden md:flex space-x-6 text-[#8F141B] w-full justify-around">
                        <li className={`group relative ${isActive('/historia') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <span className="hover:text-gray-300">El Museo</span>
                            <ul className="absolute hidden group-hover:block bg-gray-800 text-white space-y-2 mt-2">
                                <li>
                                    <Link href="/historia" className="block hover:bg-gray-700 p-2">
                                        Reseña Historia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block hover:bg-gray-700 p-2">
                                        Misión
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block text hover:bg-gray-700 p-2">
                                        Visión
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block hover:bg-gray-700 p-2">
                                        Objetivos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`group relative ${isActive('/distribucion') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <span className="hover:text-gray-300">Distribución</span>
                            <ul className="absolute hidden group-hover:block bg-gray-800 text-white space-y-2 mt-2 p-2">
                                <li>
                                    <Link href="/distribucion" className="block hover:bg-gray-700 p-2">
                                        Economía
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block hover:bg-gray-700 p-2">
                                        Historia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block hover:bg-gray-700 p-2">
                                        Petróleo
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${isActive('/red') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/red" className="hover:text-gray-300">
                                Red
                            </Link>
                        </li>
                        <li className={`${isActive('/organizacion') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/organizacion" className="hover:text-gray-300">
                                Organización
                            </Link>
                        </li>
                        <li className={`${isActive('/contacto') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/contacto" className="hover:text-gray-300">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'flex overflow-hidden' : 'hidden overflow-auto'} flex-col items-start justify-center absolute bg-blue-900 shadow-md w-full h-screen top-0 left-0 transition-all duration-500 ease-in-out md:hidden z-10`}>
                    <ul className="md:hidden bg-gray-800 text-white space-y-2 p-4">
                        <li className={`${isActive('/historia') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <span className="block">El Museo</span>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <Link href="/historia" className="block">
                                        Reseña Historia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">
                                        Misión
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">
                                        Visión
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">
                                        Objetivos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${isActive('/distribucion') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <span className="block">Distribución</span>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <Link href="/distribucion" className="block">
                                        Economía
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block">
                                        Historia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block">
                                        Petróleo
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${isActive('/red') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/red" className="block">
                                Red
                            </Link>
                        </li>
                        <li className={`${isActive('/organizacion') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/organizacion" className="block">
                                Organización
                            </Link>
                        </li>
                        <li className={`${isActive('/contacto') ? 'border-red-500 border-2 rounded-full p-2' : ''}`}>
                            <Link href="/contacto" className="block">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;
