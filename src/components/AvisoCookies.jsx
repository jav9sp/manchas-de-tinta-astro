import { useState } from "react";

const AvisoCookies = () => {

  const [cookies, setCookies] = useState(false);

  const aceptarCookies = localStorage.setItem("cookies-aceptadas", cookies);


  console.log(aceptarCookies)

  dataLayer = [];

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 animate-fadeInEase 1s ease-out">
      <div className="w-4/5 md:w-1/2 rounded-md bg-white p-6 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center font-bold text-xl">Aviso de Cookies</h2>
        <p className="text-center">
          Para ofrecer las mejores experiencias, utilizamos tecnologías como las
          cookies para almacenar y/o acceder a la información del dispositivo.
          El consentimiento de estas tecnologías nos permitirá procesar datos
          como el comportamiento de navegación o las identificaciones únicas en
          este sitio. No consentir o retirar el consentimiento, puede afectar
          negativamente a ciertas características y funciones.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            className="rounded px-4 py-2 font-bold text-lg bg-green-500 hover:bg-green-700 text-white"
            onClick={() => setCookies(true)}>
            Aceptar
          </button>
          <button
            className="rounded px-4 py-2 font-bold text-lg bg-red-500 hover:bg-red-700 text-white"
            onClick=''>
            Rechazar
          </button>
        </div>
        <div className="flex items-center gap-8">
          <a href="/politica-de-cookies" className="text-sm text-center font-semibold w-1/3">
            Política de Cookies
          </a>
          <a href="/politica-de-privacidad" className="text-sm text-center font-semibold w-1/3">
            Política de Privacidad
          </a>
          <a href="/aviso-legal" className="text-sm text-center font-semibold w-1/3">
            Aviso Legal
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvisoCookies;
