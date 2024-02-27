import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { selectDialogOpen } from '~/state/slices/dialog.slice.ts';
import { selectDraw, selectWinner } from '~/state/slices/game.slice.ts';
import { useAppSelector } from '~/state/store.hooks.ts';

type GameDialogProps = { onClose: () => void };

function GameDialog({ onClose }: GameDialogProps) {
  const open = useAppSelector(selectDialogOpen);
  const winner = useAppSelector(selectWinner);
  const draw = useAppSelector(selectDraw);

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle variant="h4">{(winner && 'Congratulations!') || (draw.status && 'Draw') || undefined}</DialogTitle>
      {winner && (
        <DialogContent>
          <Typography fontSize={20} fontWeight="bold">
            Winner: {winner.name}
          </Typography>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default GameDialog;
