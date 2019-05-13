var convertToBase7 = function(num) {
    var txt='';
    let n=Math.abs(num);
    if(n==0){
        return txt+0;
    }
    while (n> 0) {
        txt=n%7 + txt 
        n = parseInt(n / 7)
    }
    if(num<0){
        txt='-'+txt;
    }
    return txt ;
};
convertToBase7(100);