import { Box, Link, Typography } from '@mui/material'

const NavBar = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100px',
            marginBottom: '100px',
            background: 'black',
            borderRadius: '5px'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    paddingLeft: '30px',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Link href={'/'}
                    sx={{
                        textDecoration: 'none',
                        color: 'white',
                        '&:hover': {
                            color: 'blue'
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        gap: '10px'
                    }}>
                    <Typography>HOME</Typography>
                </Link>

            </Box>

        </Box>
    )
}

export default NavBar