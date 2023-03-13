import { ConverterContext } from '@/context/ConverterProvider';
import { ConverterState } from '@/reducers/converterReducer';
import debounce from 'lodash.debounce';
import React from 'react';
import { useSetAmount } from './../../Converter/hooks/useSetAmount';

export const useInitializeValue = (
    initialValue: string | undefined,
    setInputValue: (value: string) => void,
    setInitialValue: ((value: string, state: ConverterState | null) => void) | undefined,
    withSelect: boolean | undefined
) => {
    const state = React.useContext(ConverterContext);
    const updateAmount = useSetAmount('firstAmount');

    React.useEffect(() => {
        setInputValue(initialValue || '');
    }, [initialValue]);

    React.useEffect(() => {
        if (
            initialValue &&
            withSelect &&
            state &&
            state.firstCurrency &&
            state.firstCurrency !== 'Loading...'
        ) {
            updateAmount('1', state);
        }
    }, [initialValue]);

    return React.useCallback(
        debounce((value: string, state: ConverterState | null) => {
            if (setInitialValue) setInitialValue(value, state);
        }, 200),
        []
    );
};
