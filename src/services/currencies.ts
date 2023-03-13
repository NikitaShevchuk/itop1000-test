import { CurrenciesResponse, RatesResponse } from '@/Types/Response';
import axios from 'axios';

const apikey = 'tRdPnqHBvafUCrGBve5X2WDE0FVSNXiQ';

const basicApi = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data/',
    headers: { apikey }
});

export interface ConvertParams {
    from: string;
    to: string;
    amount: string;
}

const errorResponse = {
    success: false,
    rates: { 'Failed to load': '' },
    base: '',
    date: '',
    timestamp: 0
};

export const currenciesService = {
    getAll: async (): Promise<CurrenciesResponse> => {
        try {
            return await basicApi
                .get(`symbols`)
                .then<CurrenciesResponse>((response) => response.data);
        } catch {
            return {
                success: false,
                symbols: { 'No currencies is loaded': '' }
            };
        }
    },
    getUSD: async (): Promise<RatesResponse> => {
        try {
            return await basicApi
                .get(`latest?base=USD&symbols=UAH`)
                .then<RatesResponse>((response) => response.data);
        } catch {
            return errorResponse;
        }
    },
    getEUR: async (): Promise<RatesResponse> => {
        try {
            return await basicApi
                .get(`latest?base=EUR&symbols=UAH`)
                .then<RatesResponse>((response) => response.data);
        } catch {
            return errorResponse;
        }
    },
    getBasicCurrencies: async (): Promise<{ USD: string; EUR: string; timestamp: number }> => {
        const [usdResponse, eurResponse] = await Promise.all([
            currenciesService.getUSD(),
            currenciesService.getEUR()
        ]);
        return {
            USD: usdResponse.rates['UAH'],
            EUR: eurResponse.rates['UAH'],
            timestamp: usdResponse.timestamp
        };
    },
    convert: async ({ amount, from, to }: ConvertParams): Promise<number> => {
        return await basicApi
            .get(`convert?to=${to}&from=${from}&amount=${amount}`)
            .then((response) => response.data.result);
    }
};
