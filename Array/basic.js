// find the maximum and minimum from the give array day1 
//traversing
let arr =[1,2,30,400,5000];
// this is call traversing we access the each element of the array once
function traversing(arr){
    for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
}
function revrsetraversing(arr){
    for(let i=arr.length;i>=0;i--){
        console.log(arr[i])
    }
}

//minimum maximum
function minmax(arr){
    let min=arr[0];//1
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }

    }
    console.log(min);
}
// minmax(arr);

function maximum(arr){
    let max =arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max,'maximum of array element')
}
// maximum(arr);

//check array is sorted or not
function isarraysorted(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            return true;
        }
        else{
            return false;
        }
    }
}
const result = isarraysorted(arr)
// if(result){
//     console.log("array is sorted")
// }
// else{
//     console.log("array is not sorted")
// }
// revrsetraversing(arr);