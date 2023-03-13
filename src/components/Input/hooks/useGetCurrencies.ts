import { ConverterDispatchContext } from '@/context/ConverterProvider';
import { ConverterActionsTypes } from '@/reducers/Types';
import { currenciesService } from '@/services/currencies';
import React from 'react';

export const useGetCurrencies = () => {
    const dispatch = React.useContext(ConverterDispatchContext);

    React.useEffect(() => {
        const loadCurrencies = async () => {
            const response = await currenciesService.getAll();
            if (!dispatch) return;
            dispatch({
                type: ConverterActionsTypes.SET_CACHED_CURRENCIES,
                payload: Object.entries(response.symbols)
            });
        };
        loadCurrencies();
    }, []);
};
