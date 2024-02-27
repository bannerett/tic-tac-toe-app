import Grid, { GridProps } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { selectDraw, selectScore } from '~/state/slices/game.slice.ts';
import { selectPlayers } from '~/state/slices/players.slice.ts';
import { useAppSelector } from '~/state/store.hooks.ts';

function Score() {
  const score = useAppSelector(selectScore);
  const players = useAppSelector(selectPlayers);
  const draw = useAppSelector(selectDraw);

  return (
    <Grid columns={2} container columnSpacing={4} rowGap={2} width="fit-content">
      {Object.values(players).map((player) => (
        <ScoreGridItem key={player.id} xs={2} md={1}>
          {player.name}: {score[player.id]}
        </ScoreGridItem>
      ))}
      {draw.score ? <ScoreGridItem xs={2}>Draw: {draw.score}</ScoreGridItem> : null}
    </Grid>
  );
}

function ScoreGridItem({ children, ...props }: Omit<GridProps, 'item'>) {
  return (
    <Grid item textAlign="center" {...props}>
      <Typography variant="h6">{children}</Typography>
    </Grid>
  );
}

export default Score;
