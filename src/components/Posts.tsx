import {Box, Typography} from '@mui/material'
import { useState } from 'react'
import { Post } from '../types/types'

const Posts = () => {

    const posts = useState<Post[]>([]);
    

    return(
        <Box>
            <Typography>oi</Typography>
        </Box>
    )
}

export default Posts