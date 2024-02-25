import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { Player } from '~/types/player.ts';

type GameDialogProps = { winner?: Player; draw: boolean; onClose: () => void };

function GameDialog({ winner, draw, onClose }: GameDialogProps) {
  return (
    <Dialog open={!!winner || draw} fullWidth onClose={onClose}>
      <DialogTitle variant="h4">{(winner && 'Congratulations!') || (draw && 'Draw') || undefined}</DialogTitle>
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
