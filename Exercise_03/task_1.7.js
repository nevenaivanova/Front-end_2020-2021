  let arr = [10, 5, 13, 18, 51];
function lastTwoEl(arr) {
  const newArr = arr.slice(arr.length - 2, arr.length);
  return newArr;
}
console.log(lastTwoEl(arr));