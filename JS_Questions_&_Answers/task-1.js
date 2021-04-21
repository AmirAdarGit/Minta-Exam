const ensure = (value) => {
  if (value == null) {
    throw new Error("value is undefined");
  } else return value;
};
var undef;
const fls = false;
const nullValue = null;

console.log(ensure(3)); //should return 3
console.log(ensure(fls)); //should return false

try {
  ensure(undef); //should throw an exeption
} catch (err) {
  console.log(`Catch an exception: ${err}`);
}

try {
  ensure(nullValue); //should throw an exeption
} catch (err) {
  console.log(`Catch an exception: ${err}`);
}
