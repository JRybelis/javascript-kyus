function squareSum(numbers){
    // if (typeof numbers !== 'object') {
    //   if (Array.isArray (numbers) === false) {
    //   return("Input value was not an array.");
    // }
    // const array = numbers.length; 
    // if (array === 0) {
    //   return "The list is empty of numbers";
    // } 
    let squared = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const array_item = numbers [i];
      // if (typeof array_item !== 'number') {
      //   return ("At least one of the values presented was not an integer.");
      // }
      // if (isNaN (array_item) || (""+ array_item === -Infinity) || (""+array_item === Infinity)) {
      //   return ("At least one of the values presented in the array was not an acceptable integer type.")
      // }
      //   else {
      squared = array_item **2;
      sum += squared;
      
      }
    return sum; 
    }

console.log(squareSum('pozityvas'));
console.log(squareSum(-66));
console.log(squareSum(true));
console.log("=====================================");
console.log(squareSum([]));
console.log(squareSum(['pozityvas', 8]));
console.log(squareSum([true, 8]));
console.log(squareSum([NaN, 8]));
console.log(squareSum([-Infinity, 8]));
console.log(squareSum([Infinity, 8]));
console.log("=====================================");
console.log(squareSum([1,2]));
console.log(squareSum([10,2]));


/* Atsimušiau į sieną, kažko elementaraus nematau, turbūt. Bandau codewars užduotį, kurioje reikia paruošti funkciją, priimsiančią skaičių sąrašą. Kiekvienas sąrašo viduje esantis skaičius turi būti pakeltas kvadratu, o po to visi sąrašo skaičiai sumuojami kartu. Kaip ir užrašiau viską teisingai, bet vietoje 1² + 2² = 5, suma gaunasi 1. Panašu, kad mano return sum užklausa rodo tik pirmąjį array komponentą, pakeltą kvadradu. Nežinau, kurioje vietoje klaidų privėliau, ar for loop, ar sumavime. */ 