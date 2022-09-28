console.log('Student Marks:')
let Mark=[35,35,35,35,35];
let sum=0;

for(let i=0;i<Mark.length;i++)
{
    sum=sum + Mark[i];
}

console.log(sum);
let Avg=sum/Mark.length;
console.log(Avg)

if(Avg<=100 && Avg>=75){
    console.log("Distinction");
}
else if(Avg<75 && Avg>50){
    console.log("First Class");
}
else if(Avg<50 && Avg>=35){
    console.log("pass");
}
else{
    console.log("Fail");
}
