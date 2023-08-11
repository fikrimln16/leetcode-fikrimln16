var defangIPaddr = function (address) {

   let res = ''

   for (let i = 0; i < address.length; i++) {
      if(address[i] === ".") {
         res += "[.]"
      } else {
         res += address[i]
      }
      
   }

  return res
};

var defangIPaddr = function(address) {
   return address.replace(/\./g, "[.]")
};

var defangIPaddr = function(address) {
   return address.replaceAll('.','[.]')
};

console.log(defangIPaddr("1.1.1.1"));
