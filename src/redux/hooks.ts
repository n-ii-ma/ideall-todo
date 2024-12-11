import { useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

// Create typed versions of the `useDispatch` and `useSelector` hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
