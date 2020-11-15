let arr = [10, 5, 13, 18, 51];
function printArr(arr){
    const arr2 = arr.map(x => x * 2);
    arr2.forEach(function(element){
        console.log(element);
    })
}

printArr(arr);