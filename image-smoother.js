var imageSmoother = function(M) {    
    var row = M.Length;
        if (row == 0) {
            return M;
        }
        var col = M[0].Length;
        var[],[],res = new int[row],[];
        for (var i = 0; i < row; i ++) {
            res[i] = new int[col];
        }
        for (var i = 0; i < row; i ++) {
            for (var j = 0; j < col; j ++) {
                var total = 0;
                var count = 0;
                for (var k = i - 1; k <= i + 1; k ++) {
                    for (var l = j - 1; l <= j + 1; l ++) {
                        if (k >= 0 && k < row && l >= 0 && l < col) {
                            total += M[k][l];
                            count ++;
                        }
                    }
                }
                res[i][j] = total/count;
            }
        }
        
        return res;
};