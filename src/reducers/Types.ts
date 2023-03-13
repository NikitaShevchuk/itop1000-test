export enum ConverterActionsTypes {
    SET_FIRST_CURRENCY = 'SET_FIRST_CURRENCY',
    SET_SECOND_CURRENCY = 'SET_SECOND_CURRENCY',
    SET_FILTERED_CURRENCIES = 'SET_FILTERED_CURRENCIES',
    SET_FIRST_AMOUNT = 'SET_FIRST_AMOUNT',
    SET_SECOND_AMOUNT = 'SET_SECOND_AMOUNT',
    SET_CACHED_CURRENCIES = 'SET_CACHED_CURRENCIES'
}
export interface ConverterActions {
    type: ConverterActionsTypes;
    payload: any;
}