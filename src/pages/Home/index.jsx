import './style.css'

import { Card } from '../../components/Card';
import { useState, useEffect} from 'react';

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name:'', avatar: ''})

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

  function handleSubmit(event) {
    event.preventDefault()
  }

  useEffect(() => {
    // Dentro do objeto devemos colocar todas. ações que serão executadas.
    fetch("https://api.github.com/users/jonatan1103")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []) // Os arrays definem quais os estados que o useEffect depende.

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil." />
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={event => setStudentName(event.target.value)}
        />
      </form>

      <button 
        type="button" 
        onClick={handleAddStudent}>
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