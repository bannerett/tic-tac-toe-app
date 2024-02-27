/* eslint no-param-reassign: 0 */
import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectPlayers } from '~/state/slices/players.slice.ts';
import { RootState } from '~/state/store.ts';
import { Combo } from '~/types/combo.ts';

type GameState = {
  start: boolean;
  turn: number;
  winner: number | null;
  selection: Record<number, number[]>;
  combo: Combo | null;
  // mode: 'single' | 'pvp';
  score: { [key: number]: number };
  draw: { status: boolean; score: number };
};

const initialState: GameState = {
  start: false,
  turn: 0,
  winner: null,
  selection: { 0: [], 1: [] },
  combo: null,
  // mode: 'pvp',
  score: { 0: 0, 1: 0 },
  draw: { status: false, score: 0 },
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
      state.combo = null;
      state.draw.status = false;
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
        .find((combo) => combo.every((comboCell) => state.selection[id].includes(comboCell)));

      if (!win) {
        state.turn = id === 0 ? 1 : 0;
      }
      if (!win && state.selection[0].concat(state.selection[1]).length === 9) {
        state.draw.status = true;
        state.draw.score += 1;
      }
      if (win) {
        state.winner = id;
        state.combo = JSON.stringify(win) as Combo;
        state.score[id] += 1;
      }
    },
  },
});

export const { startGame, endGame, setTurn, setSelection } = gameSlice.actions;
export default gameSlice.reducer;

const selectGameState = (state: RootState) => state.game;

export const selectGameStart = createDraftSafeSelector(selectGameState, ({ start }) => start);

export const selectUserTurn = createDraftSafeSelector(
  [selectGameState, selectPlayers],
  ({ turn }, players) => players[turn]
);

export const selectWinnerId = createDraftSafeSelector(selectGameState, ({ winner }) => winner);

export const selectWinner = createDraftSafeSelector([selectWinnerId, selectPlayers], (winner, players) =>
  winner !== null ? players[winner] : undefined
);

export const selectDraw = createDraftSafeSelector(selectGameState, ({ draw }) => draw);

export const selectSelection = createDraftSafeSelector(selectGameState, ({ selection }) => Object.values(selection));

export const selectCombo = createDraftSafeSelector(selectGameState, ({ combo }) => combo);

export const selectScore = createDraftSafeSelector(selectGameState, ({ score }) => score);
