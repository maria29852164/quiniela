import React from 'react';
import ScoreForm from './ScoreForm';

interface MatchProps {
  team1: string;
  team2: string;
  flag1: string; // URL de la bandera del equipo 1
  flag2: string; // URL de la bandera del equipo 2
}

const Match: React.FC<MatchProps> = ({ team1, team2, flag1, flag2 }) => {
  
  return (
    <div className="border border-blue rounded-lg p-4 mb-4 flex justify-between items-center">
      {/* Equipo 1 */}
      <div className="flex items-center">
        <img src={flag1} alt={`Bandera de ${team1}`} className="w-8 h-8 mr-2" />
        <span className="font-bold">{team1}</span>
      </div>

      {/* Marcador */}
      <div className="flex items-center">
        <ScoreForm/>
        <span className="font-bold">-</span>
        <ScoreForm/>
      </div>

      {/* Equipo 2 */}
      <div className="flex items-center">
        <span className="font-bold mr-2">{team2}</span>
        <img src={flag2} alt={`Bandera de ${team2}`} className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Match;