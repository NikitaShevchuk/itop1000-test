export interface Response {
    success: boolean;
}

export interface CurrenciesResponse extends Response {
    symbols: {
        [key: string]: string;
    };
}
