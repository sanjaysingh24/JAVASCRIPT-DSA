// in sliding window approach we simple slide the window forward like example if the problem is given of find the sum of  subarray of size k and k=3 so if we are using sliding window then in each loop we simply slide the array element to forward but if we use the brute force approach then we simply use multiple nested loops here are the example for both the nested one and the window sliding pattern

let arr =[2,1,5,1,3,2]
let k=3 //means we need the maximam pair of 3 element to find the sum now we have to find the maximum sum of the given pair
function findsubarray(arr,k){
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<i+k;j++){
            sum+=arr[j];
           
        }
        console.log(sum);
    }
}
// findsubarray(arr,3)


//now window sliding pattern

function windowsliding(arr,k){
    //in this pattern we need two things one is the previous window sum and one is the maximum sum
    let windowsum=0;
    let maxsum=0;
    //the first window sum
    for(let i=0;i<k;i++){
          windowsum+=arr[i]
    }
    maxsum=windowsum;
    console.log(maxsum,windowsum,'both summ')
}
windowsliding(arr,3)