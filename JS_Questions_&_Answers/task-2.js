const human1 = {
  name: "amir",
  age: "28",
  address: "Haifa",
};
const human2 = {
  name: "tal",
  age: "33",
  address: "Tel Aviv",
};
var human3;

function removeProperty(obj, prop) {
  if (obj == null) return false;
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  return false;
}

console.log(removeProperty(human1, "age"));
console.log(human1);

console.log(removeProperty(human2, "hobby"));
console.log(human2);

console.log(removeProperty(human3, "hobby"));
console.log(human3);
