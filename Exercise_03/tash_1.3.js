let arr = [10, 5, 13, 18, 51];
function printArr(arr) {
  let arr2 = arr.filter(item=>item%2===0);
  arr2.forEach(function (element) {
    console.log(element);
  });
}
printArr(arr);
