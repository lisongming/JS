var rotateString = function(A, B) {
    if(A.length!==B.length){
        return false;
    }
    A=A+A;
    if(A.indexOf(B)!=-1){
        return true;
    }
    return false;
};
