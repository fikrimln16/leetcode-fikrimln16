/*

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

*/

var maximumWealth = function(accounts) { 
    
  let highest = 0;
  
  accounts.forEach((account) => {
    let sum = account.reduce((x,y) => {
      return x + y
    }, 0);
    if ( highest < sum ) highest = sum;
  })

  return highest;

};

console.log(maximumWealth([[5,2,3], [1,2,4], [1,2,5]]))
