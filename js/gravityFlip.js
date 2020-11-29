
const flip=(d, a) => {
    const sorted = a.sort((no1, no2) => no1 - no2);
    return d === "R" ? sorted : sorted.reverse();   
}

console.log(flip("R", [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip('L', [1, 4, 5, 3, 5]));