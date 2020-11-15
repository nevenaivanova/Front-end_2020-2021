  
let arr = [10, 5, 13, 18, 51];

function sum(arr) {
  let acc = 0;
  arr.reduce((element) => (acc += element));
  return acc;
}
console.log(sum(arr));