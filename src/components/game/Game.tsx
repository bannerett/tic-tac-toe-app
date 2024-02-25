import Box from '@mui/material/Box';

import GameDialog from '~/components/game/GameDialog.tsx';
import GameGrid from '~/components/game/GameGrid.tsx';
import useGame from '~/components/game/useGame.ts';

function Game() {
  const { winner, draw, handleNewGame, drawLine } = useGame();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <GameGrid winner={winner} drawLine={drawLine} />
      <GameDialog winner={winner} draw={draw} onClose={handleNewGame} />
    </Box>
  );
}

export default Game;
