import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from 'react-redux';
  import type {
    AppDispatch,
  } from './store';
import { RootState } from './redcuers';
  
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;