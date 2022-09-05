import { Box, Checkbox, Paper, Typography, Stack, Button, Link } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Task } from '../types/types'
import NavBar from './NavBar'

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = params.id
    const name = searchParams.get('name')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`,)
            .then((response) => response.json())
            .then((json) => { setTasks(json) })
    }, [])

    return (
        <Box>
            <NavBar />
            <Typography variant="h2">{`Tarefas de ${name} chupador de pica`}</Typography>

            <Link href={`/posts/${id}?name=${name}`}>
                <Button>
                    <Typography>Ver Posts</Typography>
                </Button>
            </Link>

            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {tasks.map(task => (
                    <Paper sx={{
                        width: '600px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '5px'
                    }}>
                        <Checkbox defaultChecked={task.completed} />
                        <Typography>{task.title}</Typography>
                    </Paper>
                ))}
            </Stack>
        </Box>
    )
}

export default Tasks