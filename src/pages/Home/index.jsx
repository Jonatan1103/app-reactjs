import './style.css'

import { Card } from '../../components/Card';
import { useState } from 'react';

export function Home() {
  const [studentName, setStudentName] = useState('Amanda')

  return (

    <div className='container'>
      <h1>Name: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={event => setStudentName(event.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Jonatan" time="10:55:25"/>
      <Card name="Andressa" time="10:25:25"/>
    </div>

  )
}