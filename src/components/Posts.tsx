import { Box, Typography, Card, Stack, Button, Link } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { Post } from '../types/types'
import NavBar from './NavBar';

const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    const id = params.id
    const name = searchParams.get('name')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then((json) => setPosts(json))
    }, [])

    return (
        <Box>
            <NavBar />
            <Typography variant='h2'>{`Posts de ${name} chupador de pica`}</Typography>

            <Link href={`/tasks/${id}?name=${name}`}>
                <Button>
                    <Typography sx={{ textDecoration: 'none', color: 'white' }}>Ver Tarefas</Typography>
                </Button>
            </Link>

            <Stack sx={{gap: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                {posts.map(post => (
                    <Card
                        sx={{
                            padding: '15px',
                            maxWidth: '800px',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 'bold', marginLeft: '15px' }}>{post.title}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ marginLeft: '15px', marginTop: '15px' }}>{post.body}</Typography>
                        </Box>
                    </Card>
                ))}
            </Stack>

        </Box>
    )
}

export default Posts