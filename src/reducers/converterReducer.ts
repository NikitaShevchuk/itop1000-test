import { ConverterActions, ConverterActionsTypes } from './Types';
import { checkIfValueIsDigit } from './checkIfValueIsDigit';

export const converterState = {
    firstCurrency: 'Loading...' as string,
    secondCurrency: 'Loading...' as string,
    firstAmount: '' as string,
    secondAmount: '' as string,
    cachedCurrencies: [] as [string, string][],
    filteredFirstCurrencies: [] as [string, string][],
    filteredSecondCurrencies: [] as [string, string][]
} as const;

export type ConverterState = typeof converterState;

export const converterReducer = (
    state: ConverterState,
    action: ConverterActions
): ConverterState => {
    switch (action.type) {
        case ConverterActionsTypes.SET_FIRST_AMOUNT:
            if (!checkIfValueIsDigit(action.payload)) return state;
            return { ...state, firstAmount: action.payload };

        case ConverterActionsTypes.SET_SECOND_AMOUNT:
            if (!checkIfValueIsDigit(action.payload)) return state;
            return { ...state, secondAmount: action.payload };

        case ConverterActionsTypes.SET_FIRST_CURRENCY:
            if (action.payload.length < 3) return state;
            return { ...state, firstCurrency: action.payload };

        case ConverterActionsTypes.SET_SECOND_CURRENCY:
            if (action.payload.length < 3) return state;
            return { ...state, secondCurrency: action.payload };

        case ConverterActionsTypes.SET_CACHED_CURRENCIES:
            return { ...state, cachedCurrencies: action.payload };

        case ConverterActionsTypes.SET_FILTERED_CURRENCIES:
            if (action.payload.initialValue === state.firstCurrency) {
                return {
                    ...state,
                    filteredFirstCurrencies:
                        action.payload.filteredCurrencies || state.cachedCurrencies
                };
            } else if (action.payload.initialValue === state.secondCurrency) {
                return {
                    ...state,
                    filteredSecondCurrencies:
                        action.payload.filteredCurrencies || state.cachedCurrencies
                };
            } else {
                return {
                    ...state,
                    filteredFirstCurrencies: state.cachedCurrencies,
                    filteredSecondCurrencies: state.cachedCurrencies
                };
            }
        default:
            return state;
    }
};
