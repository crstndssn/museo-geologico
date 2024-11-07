// components/BottomSection.js
import Image from 'next/image';

const BottomSection = () => {
  return (
    <section id="bottom" className="py-8 bg-[#FEFCF2] text-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-col lg:flex-row ">

          {/* Noticias */}
          <div className="w-full lg:w-2/3 p-4" data-wow-duration="1000ms" data-wow-delay="600ms">

            <h2 className="text-4xl font-semibold mb-6">Horario</h2>
            <div id="main-slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image src="/noticias/horario.svg" alt="Noticia 1" width={1000} height={300} />
                </div>
              </div>
            </div>
          </div>


          {/* Documentos */}
          <div className="w-full lg:w-1/3 p-4" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div>
              <i className="fa fa-folder-open text-2xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-4">Documentos</h2>

              <div className="mb-4 border-2 border-black p-4 rounded-md">
                <a className="flex" href="/documents/cartilla_museos.pdf" download="cartilla_museos.pdf">
                  <Image src="/download.png" alt="Descargar Cartilla" width={74} height={55} />
                  <h4>Descargar cartilla de los MUSEOS REGIONALES DEL HUILA</h4>
                </a>
              </div>

              <div className="mb-4 border-2 border-black p-4 rounded-md">
                <a className="flex" href="/documents/cartilla_museos.pdf" download="cartilla_museos.pdf">
                  <Image src="/download.png" className='w-12 h-auto' alt="Descargar Cartilla" width={48} height={48} />
                  <h4>Descargar Representantes del museo</h4>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Logos de instituciones */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-8" data-wow-duration="1000ms" data-wow-delay="600ms">
        <h4 className="text-lg mb-4">Vigilado MinEducación</h4>
        <div className="flex">
          <div className="mr-4">
            <Image src="/mineducacion.png" alt="Mineducación" width={150} height={150} className="img-responsive" />
          </div>
          <div>
            <Image src="/reglamento.png" alt="Reglamento" width={150} height={150} className="img-responsive" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default BottomSection;
