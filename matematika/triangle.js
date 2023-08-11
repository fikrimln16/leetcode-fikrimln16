var minimumTotal = function(triangle) {
  let n = triangle.length;
    let dp = Array(n).fill(Number.MAX_VALUE).map(()=> Array(n).fill(Number.MAX_VALUE));
    //let min = Number.MAX_VALUE;
    function f(i, j){
        if(i == n-1){return triangle[i][j];}
        if(dp[i][j] != Number.MAX_VALUE) return dp[i][j];
        let down = triangle[i][j] + f(i+1, j);
        let diag = triangle[i][j] + f(i+1, j+1);
        return dp[i][j] = Math.min(down, diag);
    }
    return f(0, 0);
};

console.log(minimumTotal([[2],[3,4]]))