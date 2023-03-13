import { ConverterActions } from '@/reducers/Types';
import { ConverterState, converterReducer, converterState } from '@/reducers/converterReducer';
import { FC, ReactNode, createContext, useReducer } from 'react';

export const ConverterContext = createContext<ConverterState | null>(null);
export const ConverterDispatchContext = createContext<React.Dispatch<ConverterActions> | null>(null);

interface Props {
    children: ReactNode
}

export const ConverterProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(converterReducer, converterState);

    return (
        <ConverterContext.Provider value={state}>
            <ConverterDispatchContext.Provider value={dispatch}>
                {children}
            </ConverterDispatchContext.Provider>
        </ConverterContext.Provider>
    );
};


