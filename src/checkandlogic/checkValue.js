export function isString(val) {
    const bool = typeof val === "string" ?  true : false
    return bool 
}

export function isNumber(val) {
    const bool = typeof val === "number" ? true : false
    return bool
}

export function isBoolean (val) {
    const bool = typeof val === "boolean" ? true : false
    return bool
}

export function isBoolNumStr (val) {
    return isString(val) || isNumber(val) || isBoolean(val)
}

export function isObject (val) {
    const bool = typeof val === "object" && !isArray(val) && val !== null  ? true : false
    return bool
}

export function isArray(val) {
    return val && Array.isArray(val) 
}

export function isSrc(val){      
    return val.includes("http")
}
