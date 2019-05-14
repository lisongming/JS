var lengthOfLastWord = function(s) {
    var x=s.length;
        var result=0;
    if(x==0){
        return result;
    }
    for(var i=x-1;i>=0;--i){
        if(s[i]!=' '){
                ++result;
                for(var j=i-1;j>=0;--j)
                {
                    if(s[j]!=' ')
                        ++result;
                    else
                        break;
                    
                }
                return result;
            }    
        }
        return result;
};