import { useContext, useEffect, useState } from "react"
import CntryContext from "../context/Contextcntry"
const Generalsearch = () => {

    const { setOthers,inputGeneral, setInputGeneral } = useContext(CntryContext)
    

    // if input is entered in general search, others state is true - Genel arama inputa değere girilirse others state doğru hale gelir.
    useEffect(() => {
        setOthers(inputGeneral ? true : false)
    },[inputGeneral])



    return (
        <div className="capital">
            <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"                  
                    placeholder="Type anything"
                    id="input_capital" 
                    onChange={(e) => {setInputGeneral(e.target.value)}}/>
            </div>
        </div>
    )
}

export default Generalsearch