import { useEffect, useState } from 'react';

import {
  selectGameStart,
  selectSelection,
  selectUserTurn,
  setSelection,
  setTurn,
  startGame,
} from '~/state/slices/game.slice.ts';
import { useAppDispatch, useAppSelector } from '~/state/store.hooks.ts';

export default function useGameCell(index: number) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserTurn);
  const isStart = useAppSelector(selectGameStart);
  const isSelected = useAppSelector(selectSelection).flat().includes(index);
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (!isStart) {
      setValue(null);
    }
  }, [isStart]);

  const handleClick = () => {
    if (isSelected || !user) {
      return;
    }
    if (!isStart) {
      dispatch(startGame());
    }
    setValue(user.fill);
    dispatch(setSelection({ id: user.id, cell: index }));
    dispatch(setTurn(user.id === 0 ? 1 : 0));
  };

  return { value, handleClick, isSelected };
}
