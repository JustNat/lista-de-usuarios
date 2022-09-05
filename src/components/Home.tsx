import { useState, useEffect } from 'react'
import { Box, Typography, Grid } from "@mui/material"

const Home = () => {
    const [users, setUsers] = useState([
        {
            id: null,
            name: '',
            company: {
                catchPhrase: ''
            }
        },
    ]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/",)
            .then((response) => response.json())
            .then((json) => { setUsers(json); setLoading(false) })
    }, [])

    return (
        <Box className='App'>
            <Typography variant='h2' >Usuários do GPlays</Typography>
            <Box className='card'>
                {loading ? <h2>Carregando...</h2> : null}
                <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {users.map((user) => (
                        <Grid key={user.id} item xs={6}>Nome: {user.name} <p>Frase do fuboca: {user.company.catchPhrase}</p></Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Home