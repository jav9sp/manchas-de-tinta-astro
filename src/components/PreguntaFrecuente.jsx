import { useState } from "react";

const PreguntaFrecuente = ({ pregunta, respuesta }) => {

  const [expandida, setExpandida] = useState(false);
  const handleClick = () => {
    setExpandida(!expandida);
  }

  return (
    <div>
      <div className="relative overflow-hidden shadow-md w-full h-auto p-4 rounded my-6">
        <div className="flex justify-between items-center flex-row-reverse">
          <span
            className="FAQ-btn text-4xl font-bold cursor-pointer"
            onClick={handleClick}
            aria-expanded={expandida}
          >
            {expandida ? '-' : '+'}
          </span>
          <h3 className="text-2xl font-bold max-w-3/4 text-wrap py-4">
            {pregunta}
          </h3>
        </div>
        <p className={`respuesta pt-4 border-t-2 ${expandida ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}>
          {respuesta}
        </p>
      </div>
    </div>
  );
};

export default PreguntaFrecuente;
