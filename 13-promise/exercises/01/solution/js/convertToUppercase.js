// 1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. A függvény visszatérési érték egy Promise.  
// Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, 
//ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
// Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'
const convertToUppercase = (input) => {
    return new Promise((resolve, reject) => {
        let result = [];
        input.forEach(element => {
            if(typeof element !== 'string'){
                reject(new Error('Error: Not all items in the array are strings!'));
            } else {
                result.push(element.toLocaleUpperCase());
            }
    });
    resolve(result);
})};

export default convertToUppercase;
