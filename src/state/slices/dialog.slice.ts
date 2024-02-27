/* eslint no-param-reassign: 0 */
import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/state/store.ts';

const initialState = { open: false };

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state) {
      state.open = true;
    },
    closeDialog(state) {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;

const selectDialogState = (state: RootState) => state.dialog;

export const selectDialogOpen = createDraftSafeSelector(selectDialogState, ({ open }) => open);
