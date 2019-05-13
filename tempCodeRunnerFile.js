if(x==0&&y==0){
        return 0;
    }
    var sum =x^y;
    var i=0;
    while(sum!=0){
        sum=sum&(sum-1);
        i++;
    }
    return i;