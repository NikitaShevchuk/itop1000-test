import { CurrenciesResponse } from '@/Types/Response';
import axios from 'axios';

const apikey = 'tRdPnqHBvafUCrGBve5X2WDE0FVSNXiQ';

const basicApi = axios.create({
    baseURL: 'https://api.apilayer.com/fixer/',
    headers: { apikey }
});

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
    }
};
