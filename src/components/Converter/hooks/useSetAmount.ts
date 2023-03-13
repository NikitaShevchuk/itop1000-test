import { ConverterContext } from '@/context/ConverterProvider';
import { ConverterActionsTypes } from '@/reducers/converterReducer';
import { ConvertParams, currenciesService } from '@/services/currencies';
import React from 'react';
import { ConverterDispatchContext } from '../../../context/ConverterProvider';

const clearCurrency = (value: string) => {
    return value.split('-')[0].trim();
};

export const useSetAmount = (amountToSet: 'firstAmount' | 'secondAmount') => {
    const state = React.useContext(ConverterContext);
    const dispatch = React.useContext(ConverterDispatchContext);
    if (!state || !dispatch) return;

    const { firstCurrency, secondCurrency } = state;
    return async (amount: string) => {
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
