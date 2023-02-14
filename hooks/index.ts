import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store/store';

export const useCustomDispatch: () => AppDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
