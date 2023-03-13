import { ConverterActionsTypes } from '@/reducers/Types';
import { ConverterState } from '@/reducers/converterReducer';
import { ConvertParams, currenciesService } from '@/services/currencies';
import React from 'react';
import { ConverterDispatchContext } from '../../../context/ConverterProvider';

export const clearCurrency = (value: string) => {
    return value.includes('-') ? value.split('-')[0].trim() : value;
};

export const useSetAmount = (amountToSet: 'firstAmount' | 'secondAmount') => {
    const dispatch = React.useContext(ConverterDispatchContext);

    return async (amount: string, state: ConverterState | null) => {
        if (!state || !dispatch) return;
        const { firstCurrency, secondCurrency } = state;
        if (!firstCurrency || !secondCurrency) return;
        const params: ConvertParams = {
            amount: amount,
            from: clearCurrency(amountToSet === 'secondAmount' ? secondCurrency : firstCurrency),
            to: clearCurrency(amountToSet === 'secondAmount' ? firstCurrency : secondCurrency)
        };
        const newAmount = await currenciesService.convert(params);
        dispatch({
            type:
                amountToSet === 'secondAmount'
                    ? ConverterActionsTypes.SET_FIRST_AMOUNT
                    : ConverterActionsTypes.SET_SECOND_AMOUNT,
            payload: String(newAmount)
        });
        dispatch({
            type:
                amountToSet === 'secondAmount'
                    ? ConverterActionsTypes.SET_SECOND_AMOUNT
                    : ConverterActionsTypes.SET_FIRST_AMOUNT,
            payload: amount
        });
    };
};
