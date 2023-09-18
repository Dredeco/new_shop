const { createContext, useState } = require("react");

export const AppContext = createContext(0);

export const AppContextProvider = ({ children }) => {
    const [filterText, setFilterText] = useState('')
    const [filterFavorite, setFilterFavorite] = useState(false)
    
    return (
        <AppContext.Provider value={{ filterText, setFilterText, filterFavorite, setFilterFavorite }}>
            {children}
        </AppContext.Provider>
    )
}