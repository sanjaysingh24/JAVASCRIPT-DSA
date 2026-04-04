
// function traversing(arr){
//     for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// }
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
// console.log(arrs);

//insertion at the first 
let arr = [1,2,3,4,5,6];
// function insertatstart(elem)
// //insertion at the end
function deleteatspecificposition(arr,pos){
   if(pos<1){
    console.log("Position can not be less then 1")
   }
   for(let i =pos-1;i<arr.length;i++){
    arr[i]=arr[i+1]
         
   }
   arr.length=arr.length-1;
}
// deleteatspecificposition(arr,4)
// console.log(arr);

//reverse an array

function reversearray(arr){
    let res=[]
    for(let i  =arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    console.log(res)
}
// reversearray(arr)


//second approach
function reversearray2(arr){
   let left=0;
   let right=arr.length-1;
   while(left<right){
    [arr[left],arr[right]] =[arr[right],arr[left]];
    left++;
    right--;

   }
}
reversearray2(arr);
console.log(arr);