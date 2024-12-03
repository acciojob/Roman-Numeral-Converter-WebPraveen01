function convertToRoman(num) {
 let str=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

let num=[1000,900,500,400,100,90,50,40,10,9,5,4,1];

let x=2739;
let ptr=0;
let ans="";
while(x>0)
{
    let number=num[ptr];
    if(x>=number)
    {
        ans=ans+str[ptr];
        x=x-number;
    }
    else
    {
        ptr++;
    }
}
console.log(ans);
   



