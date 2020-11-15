let arr = [10, 5, 13, 18, 51];
function multiplesOf3(arr){
    const arr3 = arr.filter((element)=>element%3===0);
    return arr3;
}
console.log(multiplesOf3(arr));
