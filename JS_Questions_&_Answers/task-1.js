

const ensure = (value) =>  {
    if(value === undefined) {
        throw new Error ("value is undefined");
    }
    else return value;
}
const undef = undefined;
const b = false;
const num = 3;

console.log(ensure(3)); //shuld return 3
console.log(ensure(b)); //shuld return false

try {
    ensure(val); //shuld throw an exeption
} catch (err) {
    console.log(`Catch an exaption: ${err}`);
}

