'use client'
import { Container } from "../components/Container"
import { useTasks } from '../context/TaskContext'
import {useEffect} from 'react'
import {withAuth} from "@/app/components/WithAuth";
import  Match  from '@/app/components/Match'
import CupVideo from "../components/CupVideo";



 function Quiniela () {
    
  const { getMatches } = useTasks()

  const matches = [{
    id: 1, team1: 'Argentina', team2: 'Brasil', flag1: '/flags/argentina.png', flag2: '/flags/brasil.png'
  }]
  const youtubeVideoId = '942YbMbCal0'

  return(
    <>
      <main className="min-h-screen w-screen items-center bg-gradient-to-b from-sky to-blue overflow-hidden flex justify-center">
        <Container>
        <CupVideo videoId={youtubeVideoId}/>


          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">QUINIELA COPA AMERICA 2024</h1>
          </div>

            <div className="container mx-auto px-4">
            {matches.map((match) => (
            <Match
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            flag1={match.flag1}
            flag2={match.flag2}
            /> ))}
            </div>
            
            <div className="container mx-auto px-4">
            {matches.map((match) => (
            <Match
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            flag1={match.flag1}
            flag2={match.flag2}
            />  ))}
            </div>
           
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">Cuartos de Final</h1>
          </div>

          <div className="container mx-auto px-4">
            {matches.map((match) => (
            <Match
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            flag1={match.flag1}
            flag2={match.flag2}
            /> ))}
            </div>
            
            <div className="container mx-auto px-4">
            {matches.map((match) => (
            <Match
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            flag1={match.flag1}
            flag2={match.flag2}
            />  ))}
            </div>    
        </Container>
      </main>
    </>
  )
}
export default withAuth(Quiniela)

