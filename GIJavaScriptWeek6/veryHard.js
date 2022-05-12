// Very hard

// Y​​ou are given coins of different denominations and a total amount of money
// amount
// 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that
// amount of money cannot be made up by any combination of the coins, return -1.


var coinChange = function(coins, amount){
 const table = new Array(amount + 1).fill(Infinity);
 table[0] = 0;
 for(let coin of coins){
     for(let i = 0; i < table.length; i++){
         if(coin <= i){
             let idx = i - coin;
             let potentialAmt = table[idx] + 1;
             table[i] = Math.min(potentialAmt, table[i]);
 }
 return table[table.length - 1] === Infinity ? - 1 : table[table.length - 1];
}
 }
  }
console.log(coinChange([1,2,5],11));
