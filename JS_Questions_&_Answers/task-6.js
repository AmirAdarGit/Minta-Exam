const lookAndSay = (str) => {
  let counter = 0;
  let ans = "";
  const strSize = str.length;

  for (let i = 0; i < strSize - 1; i++) {
    counter = 1;
    while (str[i + 1] == str[i]) {
      counter++;
      i++;
    }
    ans += `${str[i]}${counter}`;
  }

  // adge point 1: the last number is single //
  if (str[strSize - 2] != str[strSize - 1]) {
    ans += `${str[strSize - 1]}1`;
  }
  // adge point 2: the str is single char
  if (strSize == 1) {
    ans = `${str[0]}1`;
  }
  return ans;
};

console.log(lookAndSay("22111332"));
console.log(lookAndSay("1"));
console.log(lookAndSay("4442"));
