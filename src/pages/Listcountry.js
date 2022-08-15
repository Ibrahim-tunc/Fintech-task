import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Capitalsearch from "../components/Capitalsearch"
import Generalsearch from "../components/Generalsearch"
import Others from "../components/Others"
import Thead from "../components/Thead"
import cntryContext from "../context/Contextcntry"

const Listcountry = () => {

    // With the context structure created, the data store is created and the relevant data is retrieved. 
    // Oluşturulan context yapısı ile veri deposundan ilgili veriler çekiliyor
    const { setAllCountries,countries,setCountries, others, inputGeneral } = useContext(cntryContext)
    


    // All country data is retrieved while loading the page 
    // Sayfa yüklenirken tüm ülke verileri çekiliyor

    const getCountries = async() => {
        try {
            const allCountries = await axios.get('https://restcountries.com/v2/all')
            setCountries(allCountries.data)
            setAllCountries(allCountries.data)
            // The reason for creating two countries state here is to filter in the capital search component.
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>  
            <Capitalsearch />
            <Generalsearch />
            <table className="table table-success table-striped">
                <Thead />
                <tbody>
                    {     /* handled country datas is placed in the relevant tables - çekilen ülke verileri ilgili tablolarayerleştiriliyor */
                     countries.map((c, i) =>
                            countries &&
                            <tr className={others && !JSON.stringify(c).toLocaleUpperCase('tr-TR')
                            .includes(inputGeneral.toLocaleUpperCase('tr-TR')) && "none"} key={i}> {/* Checking that the entered input matches any data -  input girilmişse herhangi bir veriyle eşleştiği kontrol ediliyor*/}
                                <td>{i}</td>
                                <td>{c.name}</td>
                                <td>{c.capital}</td>
                                <td>{c.region}</td>
                                <td>
                                    <div className="flag" >
                                    <img src={c.flag} className="img-fluid" />
                                    </div>                                   
                                </td>
                                {others && /* Input is checked and redirected to Others component - İnputun girildiği kontrol edilip Others componentine yönlendiriliyor */
                                <td className="others">
                                    <ul>
                                        <Others c={c}/>  
                                    </ul>
                                </td>
                                }
                            </tr>
                        )                                             
                    }
                </tbody>
            </table>
        </>
    )
}



export default Listcountry