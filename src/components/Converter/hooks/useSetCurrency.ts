import { ConverterContext, ConverterDispatchContext } from '@/context/ConverterProvider';
import { ConverterActionsTypes } from '@/reducers/Types';
import React from 'react';

export const useSetCurrency = (currencyToSet: 'first' | 'second') => {
    const state = React.useContext(ConverterContext);
    const dispatch = React.useContext(ConverterDispatchContext);
    if (!state || !dispatch) return;

    return async (currencies?: Array<[string, string]>, isInitial?: boolean) => {
        if (!currencies || !currencies[0]) return;
        dispatch(
            currencyToSet === 'second'
                ? {
                      type: ConverterActionsTypes.SET_SECOND_CURRENCY,
                      payload: `${currencies[0][0]} - ${currencies[0][1]}`
                  }
                : {
                      type: ConverterActionsTypes.SET_FIRST_CURRENCY,
                      payload: isInitial
                          ? `${currencies[1][0]} - ${currencies[1][1]}`
                          : `${currencies[0][0]} - ${currencies[0][1]}`
                  }
        );
    };
};
