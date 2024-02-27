import Box from '@mui/material/Box';

import GameDialog from '~/components/game/GameDialog.tsx';
import GameGrid from '~/components/game/gameGrid/GameGrid.tsx';
import useGame from '~/components/game/useGame.ts';

function Game() {
  const { handleNewGame } = useGame();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <GameGrid />
      <GameDialog onClose={handleNewGame} />
    </Box>
  );
}

export default Game;
