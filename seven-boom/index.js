const touchSeven = (numbers) => {
  const boomsString = numbers
    .join("")
    .split("")
    .filter((char) => char === "7")
    .reduce((acc, _) => acc + "Boom! ", "");

  return boomsString.length === 0 ? "there is no 7 in the array" : boomsString;
};

console.log(touchSeven([7, 77, 100]));
