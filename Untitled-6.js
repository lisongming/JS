var canConstruct = function(ransomNote, magazine) {
    for(let i=0;i<ransomNote.length;){
         if(magazine.indexOf(ransomNote[i])>=0){
            magazine = magazine.replace(magazine.charAt(magazine.indexOf(ransomNote[i])),"");
            i++;
        }
        else{
            return false;
        }
    }
    return true;
};

canConstruct(a,b)