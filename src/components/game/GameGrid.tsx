import { SxProps } from '@mui/material';
import Grid from '@mui/material/Grid';

import GameCell from '~/components/gameCell/GameCell.tsx';
import { Player } from '~/types/player.ts';

type GameGridProps = { winner?: Player; drawLine: () => SxProps };

const gameCells = Array(9)
  .fill('cell')
  .map((_, index) => index);

function GameGrid({ winner, drawLine }: GameGridProps) {
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
