import { useState, useEffect } from 'react'
import './App.css'
import { Grid } from '@mui/material'

const App = (props:any) => {
  const [users, setUsers] = useState([
    {id : 1, name : "", 
    company : { 
      catchPhrase : ""
    }},
    {id : 2, name: "", company: {
      catchPhrase : ""
    }}
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/", {
    })
      .then((response) => response.json())
      .then((json) => {setUsers(json); setLoading(false)})
      }, [])

  return (
    <div className='App'>
      <h1>Usuários do GPlays</h1>
      <div className='card'>
        {loading ? <h2>Carregando...</h2> : null}
          <Grid container rowSpacing={6} columnSpacing={{xs : 1, sm : 2, md : 3}}>
          {users.map((user) => (
						<Grid key={user.id} item xs={6}>Nome : {user.name} <p>Frase do fuboca: {user.company.catchPhrase}</p></Grid>
					))}
          </Grid>
      </div>
    </div>
  )
}

export default App
