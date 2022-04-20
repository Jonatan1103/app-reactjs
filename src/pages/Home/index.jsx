import './style.css'
import fotoPerfil from '../../images/jonatan.png'

import { Card } from '../../components/Card';
import { useState } from 'react';

export function Home() {
  const [studentName, setStudentName] = useState()

  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent])
  }

  return (

    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>Jonatan</strong>
          <img src={fotoPerfil} alt="foto de perfil." />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome"
        onChange={event => setStudentName(event.target.value)}
      />

      <button 
        type="button" 
        onClick={ handleAddStudent }>
          Adicionar
      </button>

      {
        students.map(({ name, time }, index) => 
          <Card 
            key={index}
            name={name} 
            time={time}
          />
        )
      }
    </div>

  )
}