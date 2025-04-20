/**
 * Crea una función que combine los dos nombres, dejando un espacio en medio
 * 
 * @param {string} name1 Primer nombre
 * @param {string} name2 Segundo nombre
 * 
 * @returns {string} Devuelve un string que son los dos nombres contactenados separados por un espacio 
 */

function combineNames(name1, name2) {

    // Concatenamos los dos nombres con un espacio en medio
    // Usamos el operador + para unir los strings
    let fullName = name1 + ' ' + name2

    // Devolvemos el resultado de la concatenación
    return fullName

}

console.log(combineNames('James', 'Stevens')); // "James Stevens"

console.log(combineNames('Justin', 'Case')); // "Justin Case"

console.log(combineNames('Susana', 'Oria')); // "Susana Oria"


