/* eslint no-param-reassign: 0 */
import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/state/store.ts';
import { Combo } from '~/types/combo.ts';
import { Player } from '~/types/player.ts';

type GameState = {
  start: boolean;
  turn: number;
  winner: number | null;
  selection: Record<number, number[]>;
  players: [Player, Player];
};

const initialState: GameState = {
  start: false,
  turn: 0,
  winner: null,
  players: [
    { id: 0, fill: 'x', name: 'Player 1' },
    { id: 1, fill: 'o', name: 'Player 2' },
  ],
  selection: { 0: [], 1: [] },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      state.start = true;
    },
    endGame(state) {
      state.start = false;
      state.turn = 0;
      state.winner = null;
      state.selection = { 0: [], 1: [] };
    },
    setTurn(state, { payload }: PayloadAction<number>) {
      state.turn = payload;
    },
    setSelection(state, { payload: { id, cell } }: PayloadAction<{ id: number; cell: number }>) {
      const isSelected = state.selection[0].concat(state.selection[1]).includes(cell);
      if (isSelected) {
        return;
      }
      state.selection[id].push(cell);
      state.selection[id].sort();

      const win = Object.values(Combo)
        .map((combo) => JSON.parse(combo) as number[])
        .some((combo) => combo.every((comboCell) => state.selection[id].includes(comboCell)));

      if (win) {
        state.winner = id;
      }
    },
  },
});

export const { startGame, endGame, setTurn, setSelection } = gameSlice.actions;
export default gameSlice.reducer;

const selectGameState = (state: RootState) => state.gameSlice;

export const selectGameStart = createDraftSafeSelector(selectGameState, ({ start }) => start);

export const selectUserTurn = createDraftSafeSelector([selectGameState], ({ turn, players }) => players[turn]);

export const selectWinner = createDraftSafeSelector([selectGameState], ({ winner, players }) =>
  winner !== null ? players[winner] : undefined
);

export const selectDraw = createDraftSafeSelector(
  selectGameState,
  ({ selection, winner }) => !winner && selection[0].concat(selection[1]).length === 9
);

export const selectSelection = createDraftSafeSelector(selectGameState, ({ selection }) => Object.values(selection));
