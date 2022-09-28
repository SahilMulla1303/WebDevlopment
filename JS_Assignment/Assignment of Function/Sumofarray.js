function Sums(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum + arr[i];
    }
    return sum;
}
var arr=[10,20,30,40,50,60];
var x=Sums(arr);
console.log(x);