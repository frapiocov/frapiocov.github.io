import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

export default function FloatingActionButton() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="large" color="primary" aria-label="menu">
          <MenuIcon />
        </Fab>
      </Box>
    );
  }