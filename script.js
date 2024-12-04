function convertToRoman(num) {
    let str = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    let ptr = 0;
    let ans = "";
    while(num > 0) {
        if(num >= val[ptr]) {
            ans = ans + str[ptr];
            num = num - val[ptr];
        } else {
            ptr++;
        }
    }
    return ans;
}


