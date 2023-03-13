import debounce from 'lodash.debounce';
import React from 'react';

export const useInitializeValue = (
    initialValue: string | undefined,
    setInputValue: (value: string) => void,
    setInitialValue: ((value: string) => void) | undefined
) => {
    React.useEffect(() => {
        if (initialValue) setInputValue(initialValue);
    }, [initialValue]);

    return React.useCallback(
        debounce((value: string) => {
            if (setInitialValue) setInitialValue(value);
        }, 200),
        []
    );
};
