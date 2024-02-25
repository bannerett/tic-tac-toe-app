import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <AppBar sx={{ p: 2 }}>
      <Typography noWrap variant="h5">
        Tic-Tac-Toe
      </Typography>
    </AppBar>
  );
}

export default Navbar;
