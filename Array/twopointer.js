// two pointer pattern basic
//find two elements (a pair) whose sum equals the target

let arr=[1,2,3,4,5,6];
let target = 15;
function findpair(arr,target){
    let l =0;
    let r = arr.length-1;
    while(l<r){
        let sum = arr[l]+arr[r];
        if(sum===target){
            console.log(arr[l],arr[r],'pair found')
            return;
        }
        else if(sum>target){
            r--;
        }
        else{
            l++;
        }
    }   
}
// findpair(arr,target)

//count pairs with  given sum(target);
function findallpairs(arr,target){
    let l=0;
    let r =arr.length-1;
    let count=0;
    
    while(l<r){
        let sum = arr[l]+arr[r];
    
        if(sum===target){
            count++;
            l++;
            r--;
        }
        else if(sum>target){
            r--;
        }
        else{
            l--;
        }
    }
    console.log(count);
}
// findallpairs(arr,target)

// Pair with target difference

function findpairwithtargetdifference(arr,target){
    let l=0;
    let r= arr.length-1;
    while(l<r){
        let diff = arr[r]-arr[l];
        if(diff===target){
            console.log(arr[l],arr[r],'pair found')
            return;
        }
        else if(diff>target){
            r--;
        }
        else{
            l++;
        }
    }
    console.log('pair not found')
}
// findpairwithtargetdifference(arr,target)


function findallpairwithminimumdifference(arr,target){
    let l=0;
    let r = arr.length-1;
    let min=Infinity;
    let bestpair=null;
    
    while(l<r){
        let sum = arr[r]+arr[l];
        let diff =Math.abs(sum-target);
        if(diff<min){
            min=diff;
            bestpair=[arr[l],arr[r]];
        }
        if(sum===target){
            console.log(arr[l],arr[r],'pair found')
            return;
        }
        else if(sum>target){
            r--;
        }
        else{
            l++;    
        }
    }
    console.log(bestpair,'best pair with minimum difference')
}
findallpairwithminimumdifference(arr,target)