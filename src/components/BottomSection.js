// components/BottomSection.js
import Image from 'next/image';

const BottomSection = () => {
  return (
    <section id="bottom" className="py-8 bg-white text-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Noticias */}
          <div className="w-full md:w-2/3 p-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <i className="fa fa-bell text-2xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-6">Noticias</h2>
              <div id="main-slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image src="/noticias/horario.png" alt="Noticia 1" width={600} height={300} className="rounded-lg" />
                  </div>
                  <div className="carousel-item">
                    <Image src="/slider/2.jpg" alt="Noticia 2" width={600} height={300} className="rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentos */}
          <div className="w-full md:w-1/3 p-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <i className="fa fa-folder-open text-2xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-4">Documentos</h2>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="py-2">
                        <h4>Cartilla de los museos regionales del Huila</h4>
                        <a href="/documents/cartilla_museos.pdf" download="cartilla_museos.pdf">
                          <Image src="/download.png" alt="Descargar Cartilla" width={55} height={35} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <h4>Representantes del museo</h4>
                        <a href="/documents/cartilla_museos.pdf" download="cartilla_museos.pdf">
                          <Image src="/download.png" alt="Descargar Cartilla" width={55} height={35}  />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Logos de instituciones */}
        <div className="container mx-auto flex justify-between items-center py-8 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <h4 className="text-lg">Vigilado Mineducación</h4>
          <div className="flex">
            <div className="mr-4">
              <Image src="/mineducacion.png" alt="Mineducación" width={150} height={150} className="img-responsive" />
            </div>
            <div>
              <Image src="/reglamento.png" alt="Reglamento" width={150} height={150} className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
