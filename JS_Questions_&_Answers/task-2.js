const humen1 = {
    name: 'amir',
    age: '28',
    address: 'Haifa'
}
const humen2 = {
    name: 'tal',
    age: '33',
    address: 'Tel Aviv'
}

function removeProperty(obj, prop) {
    if(obj[prop] != undefined){
        delete obj[prop]
        return true;
    }
    return false;
}

console.log(removeProperty(humen1, 'age'));
console.log(humen1);

console.log(removeProperty(humen2, 'hobbie'));
console.log(humen2);