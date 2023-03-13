export interface Response {
    success: boolean;
}

export interface CurrenciesResponse extends Response {
    symbols: {
        [key: string]: string;
    };
}

export interface RatesResponse extends Response {
    timestamp: number;
    base: string;
    date: string;
    rates: {
        [key: string]: string;
    };
}
