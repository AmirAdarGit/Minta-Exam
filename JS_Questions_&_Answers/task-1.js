const ensure = (value) => {
  if (value === null || value === undefined) {
    throw new Error("value is undefined");
  } else return value;
};
var undef;
const fls = false;
const nullValue = null;

console.log(ensure(3)); //shuld return 3
console.log(ensure(fls)); //shuld return false
// console.log(ensure(undef));
// console.log(ensure(nullValue));


try {
    ensure(undef); //shuld throw an exeption
} catch (err) {
    console.log(`Catch an exaption: ${err}`);
}

try {
    ensure(nullValue); //shuld throw an exeption
} catch (err) {
    console.log(`Catch an exaption: ${err}`);
}
