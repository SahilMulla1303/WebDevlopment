function MaxArray(arr){
    var max=0;
    var max=arr[0];

    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

const arr=[89,90,40,60,101,30];
const x=MaxArray(arr);
console.log('Max no in array :',x);