const howManyMissing = (arr) => [...Array(Math.max(...arr) + 1).keys()].filter(number => number >= Math.min(...arr)).length - arr.length;
