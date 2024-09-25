// pages/contacto.js
import '../src/app/globals.css';

import Nav from '@/components/Nav';

const Contacto = () => {
  return (
    <>
        <Nav/>
        <section id="contact-info" className="py-10 bg-[#FEFCF2] text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Ubicación y contacto</h2>
        <p className="lead my-4">Contáctese con nosotros si desea más información sobre nuestros servicios</p>
      </div>
      
      <div className="gmap-area">
        <div className="container">
          <div className="flex flex-wrap">
            {/* Mapa */}
            <div className="w-full sm:w-1/2 text-center">
              <div className="gmap">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5561823381004!2d-75.30306638555315!3d2.942997755206808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74f3fc46a3c5%3A0x7a63f875de8b462f!2sFacultad+Ingenier%C3%ADa+USCO!5e0!3m2!1ses!2sco!4v1538768725862" 
                  width="600" 
                  height="450" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  title="Ubicación en Google Maps"
                />
              </div>
            </div>

            {/* Información de contacto */}
            <div className="w-full sm:w-1/2 map-content">
              <ul className="list-none">
                <li>
                  <address className="mt-4">
                    <h4 className="text-lg font-bold">Universidad Surcolombiana Sede Central - Facultad de Ingeniería, 2do piso</h4>
                    <p>Avenida Pastrana Borrero - Carrera 1 - Neiva, Colombia</p>
                    <p>Teléfono: 8754753 ext 1077</p>
                    <p>Email: <a href="mailto:museogeologico@usco.edu.co" className="text-blue-500 hover:underline">museogeologico@usco.edu.co</a></p>
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    

  );
};

export default Contacto;
