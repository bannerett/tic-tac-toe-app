import { configureStore } from '@reduxjs/toolkit';

import gameMiddleware from '~/state/middleware/game.middleware.ts';
import dialogSlice from '~/state/slices/dialog.slice.ts';
import gameSlice from '~/state/slices/game.slice.ts';
import playersSlice from '~/state/slices/players.slice.ts';

export const store = configureStore({
  reducer: {
    game: gameSlice,
    players: playersSlice,
    dialog: dialogSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(gameMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
