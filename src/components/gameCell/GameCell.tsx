import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useGameCell from '~/components/gameCell/useGameCell.ts';

function GameCell({ index }: { index: number }) {
  const { value, handleClick, isSelected } = useGameCell(index);

  return (
    <Grid item xs={1} sx={{ aspectRatio: '1' }}>
      <Button
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: isSelected ? 'none' : 'all',
          userSelect: isSelected ? 'none' : 'initial',
        }}
        variant="contained"
        color={(!value && 'inherit') || (value === 'x' && 'info') || (value === 'o' && 'warning') || undefined}
        onClick={handleClick}
      >
        <Typography sx={{ fontSize: '9rem', fontFamily: 'Arial, sans-serif' }}>{value}</Typography>
      </Button>
    </Grid>
  );
}

export default GameCell;
