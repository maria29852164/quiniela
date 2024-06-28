import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Resultados = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const obtenerResultados = async () => {
      try {
        const response = await axios.get('/api/resultados'); // Endpoint de tu API para obtener los resultados
        setMatches(response.data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Error al obtener resultados:', error);
      }
    };

    obtenerResultados();
  }, []); // Se ejecuta solo al montar el componente

  return (
    <main className='min-h-screen w-screen items-center bg-gradient-to-b from-sky to-blue overflow-hidden flex justify-center'>
         <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Resultados de la Copa América USA 2024</h1>

      {/* Lista de resultados */}
      <div className="grid grid-cols-1 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="border border-gray rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Partido {match.id}</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={match.flag1} alt={`Bandera de ${match.team1}`} className="w-8 h-8 mr-2" />
                <span className="font-bold">{match.team1}</span>
              </div>
              <div className="font-bold text-2xl">
                {match.score1} - {match.score2}
              </div>
              <div className="flex items-center">
                <span className="font-bold">{match.team2}</span>
                <img src={match.flag2} alt={`Bandera de ${match.team2}`} className="w-8 h-8 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
   
  );
};

export default Resultados;