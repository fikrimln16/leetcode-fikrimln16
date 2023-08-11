// var luckyNumbers  = function(lampu, waktu) {
   
//    let result = []

//    for(const detik of waktu){
//       let temp = []
//       lampu.forEach((element) => {
//          temp.push(element)
//       })
//       let res = temp.filter((element) => {
//          if(detik % element === 0){
//             return element
//          }
//       })
//       if(res.length === lampu.length){
//          result.push("YA")
//       } else {
//          result.push("TIDAK")
//       }
//    }
//    return result
// };

var lampu = function(lampu, waktu) {
   return waktu.map(detik => {
       const res = lampu.filter(element => detik % element === 0);
       return res.length === lampu.length ? "YA" : "TIDAK";
   });
};
console.log(lampu([1,2,10],[1,1000000000000000000])); 
//[ 'TIDAK', 'TIDAK', 'YA', 'TIDAK', 'TIDAK', 'TIDAK', 'YA', 'YA' ]



// var luckyNumbers = function(lampu, waktu) {
//    return waktu.map(detik => lampu.every(element => detik % element === 0) ? "YA" : "TIDAK");
//