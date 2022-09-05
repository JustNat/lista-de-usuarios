import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Link } from "@mui/material"
import { User as Users } from '../types/types'

const Home = () => {
    const [users, setUsers] = useState<Users[]>([]);
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
                        <Grid key={user.id} item xs={6}>
                            <Link href={`/tasks/${user.id}?name=${user.name}`}> Nome: {user.name} <Typography>Frase do fuboca: {user.company.catchPhrase}</Typography> </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Home