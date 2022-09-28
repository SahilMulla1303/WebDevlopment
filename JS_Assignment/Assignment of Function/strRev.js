function StrRev(StrValues){
    var RevStr='';
    for(let i=StrValues.length-1;i>=0;i--){
        RevStr +=StrValues[i];
    }
    return RevStr;
} 

var str='Yogesh';
var x=StrRev(str);
console.log(x);
