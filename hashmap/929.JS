var numUniqueEmails = function (emails) {

  //menggunakan set agar value yang duplikat tidak terhitung
  let counter = new Set();
  for (let email of emails) {

    //pisahkan lokal dan domain
    let splited = email.split("@")
    console.log(splited) // [ 'test.email+alex', 'leetcode.com' ] , [ 'test.email.leet+alex', 'code.com' ]

    //kita pakai lokal dahulu, lalu split +
    //karena kita tidak menggunakan karakter setelah +
    //maka kita akan menggunakan local[0]
    let local = splited[0].split("+")
    console.log(local) // [ 'test.email', 'alex' ], [ 'test.email.leet', 'alex' ]

    //ubah local[0] jika ada "."" maka hapus
    let localfiltered = local[0].replaceAll(".", "")
    console.log(localfiltered) // testemail, testemailleet

    //gabungkan local[0] yang sudah difilter tadi bersama splited[1]
    //splited[1] adalah domain nya, lalu tambahkan @ diantara keduanya
    counter.add(localfiltered+"@"+splited[1])
    
  }

  console.log(counter) // Set { 'testemail@leetcode.com', 'testemailleet@code.com' }


  //return jumlah set nya
  return counter.size
};

console.log(
  numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])
);
