// find the maximum and minimum from the give array day1 
//traversing
// let arr =[1,2,30,400,5000];
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
// const result = isarraysorted(arr)
// if(result){
//     console.log("array is sorted")
// }
// else{
//     console.log("array is not sorted")
// }
// revrsetraversing(arr);

// now insertion the element with the specific position for all positon 
let arrs =[1,2,30,400,5000]
function insertionatposition(arrs,pos,elem){
    if(pos<1){
        console.log("Position can not be less then 1")
        return;
    }
    if(pos>arrs.length+1){
        console.log("Position should be withing the range");
        return;

    }
    let i=0;
    for(i=arrs.length-1;i>=pos-1;i--){
        arrs[i+1]=arrs[i];
    }

    arrs[pos-1]=elem;
    

}

insertionatposition(arrs,0,10)
console.log(arrs);

//insertion at the first 
// let arr = [1,2,3,4,5,6];
// function insertatstart(elem)
// //insertion at the end
