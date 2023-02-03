import { TypedUseSelectorHook, useDispatch,useSelector} from 'react-redux';
import {IRootState,AppDispatch} from "./shopStore"


export const useAppDispatch: ()=> AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;