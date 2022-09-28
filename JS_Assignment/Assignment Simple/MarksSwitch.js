console.log('Student Marks:')
let Mark=[95,95,95,95,95];
let sum=0;

for(let i=0;i<Mark.length;i++)
{
    sum=sum + Mark[i];
}

console.log(sum);
let Avg=sum/Mark.length;
console.log(Avg)

switch(true){
    case(Avg<=100 && Avg>=75):
        console.log("Distinction");
        break;
    case(Avg<75 && Avg>50):
        console.log("First Class");
        break;
    case(Avg<50 && Avg>=35):
        console.log("pass");
        break;
    default:
        console.log("Fail");
}