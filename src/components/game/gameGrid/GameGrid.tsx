import Grid from '@mui/material/Grid';

import useGameGrid from '~/components/game/gameGrid/useGameGrid.ts';
import GameCell from '~/components/gameCell/GameCell.tsx';

const gameCells = Array(9)
  .fill('cell')
  .map((_, index) => index);

function GameGrid() {
  const { winner, drawLine } = useGameGrid();
  return (
    <Grid
      container
      columns={3}
      spacing={1}
      sx={{
        position: 'relative',
        width: {
          xs: '90vw',
          sm: '70vw',
          lg: '40vw',
        },
        ...(winner && { pointerEvents: winner ? 'none' : 'all', userSelect: 'none' }),
        ...drawLine(),
      }}
    >
      {gameCells.map((cell) => (
        <GameCell key={cell} index={cell} />
      ))}
    </Grid>
  );
}

export default GameGrid;
