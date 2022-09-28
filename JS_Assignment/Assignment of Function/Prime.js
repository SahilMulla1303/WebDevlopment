function PrimeNo(a){
    let flag=0;
    for(let i=2;i<a;i++){
        if(a%i==0){
            flag=1;
            break
        }
    }
    if(flag==1){
        console.log('This is not prime');
    }
    else{
        console.log('This is prime');
    }
}
let a=7;
PrimeNo(a);