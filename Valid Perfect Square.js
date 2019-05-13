var isPerfectSquare = function(num) {
    let i=1;
    while(num!=0){
        num=num-i;
        i=i+2;
        if(num<=0){
            break;
        }
    }
    if(num==0){
        return true;
    }
    else{
        return false;
    }
};