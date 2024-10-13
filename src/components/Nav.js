import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Obtén la ruta actual con el hook usePathname
    const currentPath = usePathname();

    // Efecto para manejar el overflow del body
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Verificar si la ruta es la actual
    const isActive = (path) => currentPath === path;

    return (
        <div className='bg-[#8F141B]'>
            <div className="hidden mb:block bg-[#8F141B]">
                <h1 className="text-xl md:text-5xl text-center py-5 md:py-10">MUSEO GEOLOGICO Y DEL PETROLEO000</h1>
            </div>

            <nav className="flex justify-between items-center md:py-0 container mx-auto  md:bg-[#8F141B] z-10 px-0 border-b-2 border-[#8F141B] w-full">

                <div className="w-3/4 md:w-1/4 bg-[#8F141B]">
                    <div className="flex justify-start py-5 md:py-5">
                        <Image
                            src="/museo-logo.png"  // Cambia esto por la ruta de tu logo
                            alt="Logo del Museo Geológico y del Petróleo"
                            width={200}      // Ajusta el ancho según tus necesidades
                            height={100}     // Ajusta la altura según tus necesidades
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="w-1/4 md:hidden z-20 flex justify-end">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#FEFCF2] hover:text-[#FEFCF2] focus:outline-none focus:text-[#FEFCF2]">
                        {isOpen ? (
                            <svg className="w-10 h-10 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-10 h-10 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden w-3/5 md:flex md:items-center md:space-x-10 md:text-lg md:font-medium md:border-b md:border-[#8F141B] md:bg-[#8F141B] z-10">
                    <ul className="hidden md:flex space-x-6 text-[#FEFCF2] w-full justify-around">
                        <li className={`group relative py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`group relative py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/historia') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/historia" className=" hover:border-[#FEFCF2] rounded-full p-2">El Museo</Link>
                            <ul className="absolute hidden group-hover:block bg-[#FEFCF2] shadow-xl rounded-md text-white space-y-2 mt-1 p-3 left-0 right-0 text-center">
                                <li>
                                    <Link href="/historia#reseña" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Historia</Link>
                                </li>
                                <li>
                                    <Link href="/historia#mision" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Misión</Link>
                                </li>
                                <li>
                                    <Link href="/historia#mision" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0 ">Visión</Link>
                                </li>
                                <li>
                                    <Link href="/historia#objetivos" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Objetivos</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`group relative py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/distribucion') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/distribucion" className="">Distribución</Link>
                            <ul className="absolute hidden group-hover:block bg-[#FEFCF2] shadow-xl rounded-md text-white space-y-2 mt-1 p-3 left-0 right-0 text-center">
                                <li>
                                    <Link href="/distribucion" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Economía</Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Historia</Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block text-[#8F141B] hover:text-[#FEFCF2] hover:bg-[#8F141B] rounded-full m-0">Petróleo</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/red') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/red" className="">Red</Link>
                        </li>
                        <li className={`py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/organizacion') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/organizacion" className="">Organización</Link>
                        </li>
                        <li className={`py-1 px-3 border-2 border-[#8F141B] hover:border-2 hover:border-[#FEFCF2] rounded-full ${isActive('/contacto') ? 'border-[#FEFCF2] bg-[#FEFCF2] text-[#8F141B] border-2 rounded-full' : ''}`}>
                            <Link href="/contacto" className="">Contacto</Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'flex overflow-hidden' : 'hidden overflow-auto'} flex-col items-start justify-center absolute bg-[#8F141B] shadow-md w-full h-screen top-0 left-0 transition-all duration-500 ease-in-out md:hidden z-10`}>
                    <ul className="md:hidden bg-gray-800 text-white space-y-2 p-4">
                        <li className={`${isActive('/historia') ? 'border-[#8F141B] border-2 rounded-full p-2' : ''}`}>
                            <span className="block">El Museo</span>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <Link href="/historia" className="block">Reseña Historia</Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">Misión</Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">Visión</Link>
                                </li>
                                <li>
                                    <Link href="/historia" className="block">Objetivos</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${isActive('/distribucion') ? 'border-[#8F141B] border-2 rounded-full p-2' : ''}`}>
                            <span className="block">Distribución</span>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <Link href="/distribucion" className="block">Economía</Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block">Historia</Link>
                                </li>
                                <li>
                                    <Link href="/distribucion" className="block">Petróleo</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${isActive('/red') ? 'border-[#8F141B] border-2 rounded-full p-2' : ''}`}>
                            <Link href="/red" className="block">Red</Link>
                        </li>
                        <li className={`${isActive('/organizacion') ? 'border-[#8F141B] border-2 rounded-full p-2' : ''}`}>
                            <Link href="/organizacion" className="block">Organización</Link>
                        </li>
                        <li className={`${isActive('/contacto') ? 'border-[#8F141B] border-2 rounded-full p-2' : ''}`}>
                            <Link href="/contacto" className="block">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
