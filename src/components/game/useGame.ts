import { closeDialog } from '~/state/slices/dialog.slice.ts';
import { endGame } from '~/state/slices/game.slice.ts';
import { useAppDispatch } from '~/state/store.hooks.ts';

export default function useGame() {
  const dispatch = useAppDispatch();

  const handleNewGame = () => {
    dispatch(endGame());
    dispatch(closeDialog());
  };

  return { handleNewGame };
}
