var isMonotonic = function(A) {
    var flag = 0;
    for(var i=1;i<A.length;i++){
        if(A[i]-A[i-1]>0 ){
            if(flag<0){
            return false;
            }       
        }
        else if(A[i]-A[i-1]<0){
            if(flag>0){
                return false;
            } 
        }
        if(flag==0){
            flag = A[i]-A[i-1];
        }       
    }
    return true;
};