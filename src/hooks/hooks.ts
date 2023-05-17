

import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, RootDispatch } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch;
