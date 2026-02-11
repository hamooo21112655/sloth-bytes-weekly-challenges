const missingNum = (arrayFromOneToTen) =>
  new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .symmetricDifference(new Set(arrayFromOneToTen))
    .values()
    .next().value;

console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
