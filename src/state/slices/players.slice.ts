/* eslint no-param-reassign: 0 */
import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/state/store.ts';
import { Fill, Player } from '~/types/player.ts';

type PlayersState = {
  players: { [key: number]: Player };
};

const initialState: PlayersState = {
  players: {
    0: { id: 0, fill: 'x', name: 'Player 1' },
    1: { id: 1, fill: 'o', name: 'Player 2' },
  },
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer(state, { payload }: PayloadAction<Player>) {
      if (Object.values(state.players).length < 2) {
        state.players[payload.id] = payload;
      }
    },
    removePlayer(state, { payload }: PayloadAction<number>) {
      delete state.players[payload];
    },
    setPlayerFill(state, { payload: { id, fill } }: PayloadAction<{ id: number; fill: Fill | null }>) {
      state.players[id].fill = fill;
    },
    setPlayerName(state, { payload: { id, name } }: PayloadAction<{ id: number; name: string }>) {
      state.players[id].name = name;
    },
    // setPlayerScore(state, { payload: { id } }: PayloadAction<{ id: number }>) {
    //   state.score[id] += 1;
    // },
    // resetScore(state) {
    //   state.score = { 0: 0, 1: 0 };
    // },
  },
});

export const { addPlayer, removePlayer, setPlayerFill, setPlayerName } = playersSlice.actions;

export default playersSlice.reducer;

const selectPlayersState = ({ players }: RootState) => players;

export const selectPlayers = createDraftSafeSelector(selectPlayersState, ({ players }) => players);
