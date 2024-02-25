import { shallowEqual } from 'react-redux';

import { SxProps } from '@mui/material';

import { endGame, selectDraw, selectSelection, selectWinner } from '~/state/slices/game.slice.ts';
import { useAppDispatch, useAppSelector } from '~/state/store.hooks.ts';
import { Combo } from '~/types/combo.ts';

export default function useGame() {
  const dispatch = useAppDispatch();
  const winner = useAppSelector(selectWinner);
  const draw = useAppSelector(selectDraw);
  const [playerSelection1, playerSelection2] = useAppSelector(selectSelection);

  const handleNewGame = () => {
    dispatch(endGame());
  };

  const drawLine = () => {
    let line: SxProps = {
      position: 'absolute',
      content: '""',
      width: 0,
      height: 0,
      background: 'red',
      zIndex: 2,
    };
    const isFirstDiagonal =
      shallowEqual(playerSelection1, JSON.parse(Combo.FIRST_DIAGONAL)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.FIRST_DIAGONAL));
    const isSecondDiagonal =
      shallowEqual(playerSelection1, JSON.parse(Combo.SECOND_DIAGONAL)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.SECOND_DIAGONAL));
    const isFirstRow =
      shallowEqual(playerSelection1, JSON.parse(Combo.FIRST_ROW)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.FIRST_ROW));
    const isSecondRow =
      shallowEqual(playerSelection1, JSON.parse(Combo.SECOND_ROW)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.SECOND_ROW));
    const isThirdRow =
      shallowEqual(playerSelection1, JSON.parse(Combo.THIRD_ROW)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.THIRD_ROW));
    const isFirstColumn =
      shallowEqual(playerSelection1, JSON.parse(Combo.FIRST_COLUMN)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.FIRST_COLUMN));
    const isSecondColumn =
      shallowEqual(playerSelection1, JSON.parse(Combo.SECOND_COLUMN)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.SECOND_COLUMN));
    const isThirdColumn =
      shallowEqual(playerSelection1, JSON.parse(Combo.THIRD_COLUMN)) ||
      shallowEqual(playerSelection2, JSON.parse(Combo.THIRD_COLUMN));
    const transition = (tr: 'width' | 'height') => `${tr} 750ms ease-in-out`;

    if (isFirstDiagonal) {
      line = { ...line, left: 0, bottom: '50%', transform: 'rotate(45deg)', width: '100%', height: '10px' };
    }
    if (isSecondDiagonal) {
      line = { ...line, right: 0, bottom: '50%', transform: 'rotate(-45deg)', width: '100%', height: '10px' };
    }
    if (isFirstRow) {
      line = {
        ...line,
        left: '5%',
        top: '16.5%',
        width: '90%',
        height: '10px',
        transition: transition('width'),
      };
    }
    if (isSecondRow) {
      line = { ...line, left: '5%', top: '50%', width: '90%', height: '10px', transition: transition('width') };
    }
    if (isThirdRow) {
      line = {
        ...line,
        left: '5%',
        top: '83.5%',
        width: '90%',
        height: '10px',
        transition: transition('width'),
      };
    }
    if (isFirstColumn) {
      line = {
        ...line,
        top: '5%',
        left: '16.5%',
        width: '10px',
        height: '90%',
        transition: transition('height'),
      };
    }
    if (isSecondColumn) {
      line = { ...line, top: '5%', left: '50%', width: '10px', height: '90%', transition: transition('height') };
    }
    if (isThirdColumn) {
      line = {
        ...line,
        top: '5%',
        left: '83.5%',
        width: '10px',
        height: '90%',
        transition: transition('height'),
      };
    }

    return { '&::before': line };
  };

  return { winner, draw, handleNewGame, drawLine };
}
