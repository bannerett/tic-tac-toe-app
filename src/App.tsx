import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Game from '~/components/game/Game.tsx';
import Score from '~/components/game/Score.tsx';
import Navbar from '~/components/Navbar.tsx';

function App() {
  return (
    <Box sx={{ fontSize: '1.25rem', height: '100svh' }}>
      <Navbar />
      <Stack component="main" direction="column" height="100%" alignItems="center" justifyContent="center" rowGap={2}>
        <Game />
        <Score />
      </Stack>
    </Box>
  );
}

export default App;
