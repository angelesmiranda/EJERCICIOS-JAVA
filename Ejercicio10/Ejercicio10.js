const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const numeropar = number.filter(function(par){
    return par%2===0;
    }
);
console.log (numeropar);
const numeroimpar = number.filter(function(impar){
    return impar%2===1;
    }
);
console.log (numeroimpar);
