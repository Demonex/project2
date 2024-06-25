import { bindActionCreators } from '@reduxjs/toolkit'
import { useTypedDispatch } from './useTypedHooks';
import { tabsActions } from '../store/reducers/tabs.slice';
import { coreActions } from '../store/reducers/core.slice';
import { clickerActions } from '../store/reducers/clicker.slice';


const actionCreators = {
    ...tabsActions,
    ...coreActions,
    ...clickerActions
}

export const useActions = () => {
    const dispatch = useTypedDispatch();

    return bindActionCreators(actionCreators, dispatch)
}