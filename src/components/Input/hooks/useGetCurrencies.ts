import { currenciesService } from '@/services/currencies';
import React from 'react';

export const useGetCurrencies = (inputValue: string) => {
    const [currencies, setCurrencies] = React.useState<[string, string][]>([]);
    const cachedCurrencies = React.useRef<[string, string][]>([]);

    React.useEffect(() => {
        const loadCurrencies = async () => {
            const response = await currenciesService.getAll();
            cachedCurrencies.current = Object.entries(response.symbols);
            setCurrencies(Object.entries(response.symbols));
        };
        loadCurrencies();
    }, []);

    React.useEffect(() => {
        if (!inputValue) {
            setCurrencies(cachedCurrencies.current);
        } else {
            const newCurrencies = cachedCurrencies.current.filter(
                ([currency, fullName]) =>
                    currency.toLowerCase().includes(inputValue.toLowerCase()) ||
                    fullName.toLowerCase().includes(inputValue.toLowerCase())
            );
            setCurrencies(newCurrencies);
        }
    }, [inputValue]);

    return currencies;
};
