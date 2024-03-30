import React, {useContext} from 'react'

interface ContextProps {
    language: boolean,
    updateLanguage() : void
};

export const Context = React.createContext<ContextProps>({
    language: true,
    updateLanguage: () => {},
});
