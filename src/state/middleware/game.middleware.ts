import { createListenerMiddleware } from '@reduxjs/toolkit';

import { openDialog } from '~/state/slices/dialog.slice.ts';
import { setSelection } from '~/state/slices/game.slice.ts';
import { RootState } from '~/state/store.ts';

const gameMiddleware = createListenerMiddleware();

gameMiddleware.startListening({
  actionCreator: setSelection,
  effect: (_, { dispatch, getState }) => {
    const { winner, draw } = (getState() as RootState).game;

    if (winner !== null || draw.status) {
      dispatch(openDialog());
    }
  },
});

export default gameMiddleware;
