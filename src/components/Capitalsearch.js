import { useContext, useEffect, useState } from "react"
import CntryContext from "../context/Contextcntry"

const Capitalsearch = () => {
    const { allCountries, setCountries} = useContext(CntryContext)
    const [input, setInput] = useState('')

    // The countries state is filtered according to the input entered - Girilen inputa göre countries state filtrelenir

    function filteredCountries (){
        const newCountries = allCountries?.filter(compare)
        setCountries(newCountries)
    }

    function compare (c) {
        return c?.capital?.substring(0, input.length).toUpperCase() === input.toUpperCase()
    }

    useEffect(() => {
        filteredCountries()
    }, [input])

    return (
        <div className="capital">
            <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Type a Capital"
                    id="input_capital"
                    onChange={(e) => {setInput(e.target.value)}} />
            </div>
        </div>
    )
}

export default Capitalsearch