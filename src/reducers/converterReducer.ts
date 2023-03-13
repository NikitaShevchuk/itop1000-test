export const converterState = {
    firstCurrency: 'USD' as string,
    secondCurrency: 'UAH' as string,
    firstAmount: '' as string,
    secondAmount: '' as string
} as const;

export type ConverterState = typeof converterState;

export enum ConverterActionsTypes {
    SET_FIRST_CURRENCY = 'SET_FIRST_CURRENCY',
    SET_SECOND_CURRENCY = 'SET_SECOND_CURRENCY',
    SET_FIRST_AMOUNT = 'SET_FIRST_AMOUNT',
    SET_SECOND_AMOUNT = 'SET_SECOND_AMOUNT'
}

export interface ConverterActions {
    type: ConverterActionsTypes;
    payload: string;
}

const checkIfValueIsDigit = (value: string) => {
    if (!/^[0-9.]+$/.test(value)) {
        if (value !== '') return false;
    }
    return true;
};

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
        default:
            return state;
    }
};
