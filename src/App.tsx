import Box from '@mui/material/Box';

import Game from '~/components/game/Game.tsx';
import Navbar from '~/components/Navbar.tsx';

function App() {
  return (
    <Box sx={{ fontSize: '1.25rem', height: '100svh' }}>
      <Navbar />
      <Box component="main" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Game />
      </Box>
    </Box>
  );
}

export default App;
