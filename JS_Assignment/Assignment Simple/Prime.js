let x=7
console.log(x)
let flag=0;
for(let i=2;i<x;i++){
    if(x%i==0){
        flag=1;
        break;
    }
}
if(flag==1){
    console.log('This is not prime');
}
else{
    console.log('This is prime');
}