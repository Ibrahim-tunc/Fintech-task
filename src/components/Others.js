import { isArray, isBoolNumStr, isObject } from '../checkandlogic/checkValue'
import { useEffect, useState,useContext } from "react"
import cntryContext from "../context/Contextcntry"

const Others = ({ c }) => {
  const { inputGeneral } = useContext(cntryContext)
  const [properties, setProperties] = useState([])

  // With the function below, all the properties of the incoming country are arrayed. 
  // Aşağıdaki fonksiyon ile buraya gelen ülke değerinin bütün özellikleri array haline getirilir

  useEffect(() => {
    const prop = []
    doArray(c, prop)
    setProperties(prop)
  }, [])


  function doArray(c, prop) {
    let a = 0
    // The object is selected and if there is an object in the object or an object in the array, they will also be converted to an array.
    // c Objesinin içinde başka obje varsa veya bir dizinin içinde obje varsa bunların hepsi arraye dönüşür böylelikle tek tip veriyle uğraşmış oluruz dizilerle.
    for (var i in c) {
      if (isObject(c[i])) {
        prop.push([i])
        doArray(c[i], prop[a])
      }
      else if (isArray(c[i]) && isObject(c[i][0])) {
        prop.push([i])
        doArray(c[i][0], prop[a])
      }
      else {
        prop.push([i, c[i]])
      }
      a++
    }
  }

  

  function Loop (p, i,name) {
    return( 
      ( isInclude(p) || isInclude(name) ) && i > 0  
      && <li>{p[0]} : {p[1]} </li>
    )
  }
  

  // This function checks whether it contains the entered values ​​or not. Girilen inputu içerip içermediği bu fonksiyon ile kontrol edilir.
  function isInclude(p){
    return JSON.stringify(p).toLowerCase().includes(inputGeneral.toLowerCase())
  }



  return (
    <ul>
        {
          properties?.map((prop, i) =>
          isInclude(prop) && <li key={i}>
              {
                 isBoolNumStr(prop[1])   // If the second element of the array is a number string or bool, we can write it directly
                  ? `${prop[0]}:${prop[1]}`
                  : prop.length < 3
                    ? `${prop[0]} :{ ${prop[1]} }` // If the second element of the array is also an array and the second element has no more than two elements, we can write it directly in curly brackets.
                    : <div> {`${prop[0]} : {`}  
                      <ul> 
                      {prop.map((p, i) => Loop(p,i,prop[0]))} {/* If our array has multiple elements, we must map these elements and write them mutually.*/}
                      </ul> {'}'}
                    </div>
              }
            </li>)
        }
      </ul>
  )
}

export default Others