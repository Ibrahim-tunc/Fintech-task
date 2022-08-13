import { useContext } from "react"
import cntryContext from "../context/Contextcntry"

const Thead = () => {
    const { others } = useContext(cntryContext)

    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Capital</th>
                <th scope="col">Region</th>
                <th scope="col">Flag</th>
                {others && <th scope="col">Others</th>}
            </tr>
        </thead>
    )
}

export default Thead