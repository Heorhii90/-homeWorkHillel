"use strict"

const OBJ = {
    name: 'Alex',
    age: 33,
    adress: {
        country: 'UA',
        city: 'Dnipro'
    }
};
let objCopy = {};

function fullCopyingAnObjeck(initialObject) {
    let clone = Array.isArray(initialObject) ? [] : {};

    for (var key in initialObject) {
        if (initialObject[key] != null && typeof (initialObject[key]) === 'object') {
            clone[key] = fullCopyingAnObjeck(initialObject[key]);
        } else clone[key] = initialObject[key];
    }
    return clone;
};

objCopy = fullCopyingAnObjeck(OBJ);

console.log(OBJ);
console.log(objCopy);