// prefix sum is basically store cumulative sum of the array meanse store the cumulative sum of the array in the prefix array instead of calculating the sum every time we reuse the previous one

//without prefix sum

//find the sum of the array between the given range
function findsum(arr,l,r){
    let sum =0;
    for(let i=l;i<=r;i++){
       
        sum+=arr[i]
    }
    return sum;
}
let arr =[2,4,6,8,10];
let result = findsum(arr,1,3);
// console.log(result);

//now with prefix sum

//first create a build prefix array
function buildprefix(arr){
    let prefix = Array(arr.length);// beacuse initlize a new array with the same length of the given one
    prefix[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefix[i] = prefix[i-1]+arr[i];

    }
    return prefix;
}
let prefix = buildprefix(arr);
//here l = starting range = l
//here r = ending range  =r
function rangesum(prefix,l,r){
    // if l==0 mtb ki starting 0 se hai then to r tk ka sum nikal denge

    if(l==0) return prefix[r];
    return prefix[r]-prefix[l-1];// last prefix - 
}
console.log(rangesum(prefix,2,4));