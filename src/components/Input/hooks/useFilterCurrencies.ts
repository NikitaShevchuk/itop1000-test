import { ConverterDispatchContext } from '@/context/ConverterProvider';
import { ConverterActionsTypes } from '@/reducers/Types';
import React from 'react';

export const useFilterCurrencies = (
    inputValue: string,
    cachedCurrencies: [string, string][] | undefined,
    initialValue: string | undefined
) => {
    const dispatch = React.useContext(ConverterDispatchContext);

    const setCurrencies = (payload: any) => {
        if (!dispatch) return;
        dispatch({
            type: ConverterActionsTypes.SET_FILTERED_CURRENCIES,
            payload: { initialValue, filteredCurrencies: payload }
        });
    };

    React.useEffect(() => {
        if (!inputValue || inputValue === 'Loading...') {
            setCurrencies(undefined);
            return;
        } else {
            if (!cachedCurrencies) {
                setCurrencies(undefined);
                return;
            }
            const newCurrencies = cachedCurrencies.filter(
                ([currency, fullName]) =>
                    currency.toLowerCase().includes(inputValue.toLowerCase()) ||
                    fullName.toLowerCase().includes(inputValue.toLowerCase()) ||
                    `${currency} - ${fullName}`.includes(inputValue)
            );
            setCurrencies(newCurrencies[0] ? newCurrencies : undefined);
        }
    }, [inputValue, cachedCurrencies]);
};
