import { createContext, useState } from "react";

const CntryContext = createContext({})

export const CntryProvider = ({ children }) => {
    const [allCountries, setAllCountries] = useState([])
    const [countries, setCountries] = useState([])
    const [others, setOthers] = useState(false)
    const [inputGeneral, setInputGeneral] = useState('')
    const value = {
        allCountries, 
        setAllCountries,
        countries,
        setCountries,
        others,
        setOthers,
        inputGeneral,
        setInputGeneral,
    }

    return(
        <CntryContext.Provider value={value}>
            {children}
        </CntryContext.Provider>
    )
} 

export default CntryContext