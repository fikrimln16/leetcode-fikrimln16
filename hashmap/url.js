const linkCode = new Map();
const urlAsli = new Map();
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//membuat angka kode acak dari chars yang sudah disediakan diatas
const getCode = () =>
  "http://tinyurl.com/" +
  Array.from({ length: 6 }, () => chars.charAt(Math.random() * 62)).join("");

//membuat linkCode dari urlAsli nya
const encode = (longUrl) => {

  //cek terlebih dahulu apakah link aslinya sudah tersedia atau belum
  if (urlAsli.has(longUrl)) {
    return urlAsli.get(longUrl);
  }

  //generate linkCode baru nya
  let code = getCode();
  //mencari apakah linkCode sudah tersedia atau belum
  while (linkCode.has(code)) {
    code = getCode();
  }

  //masukkan urlAsli dan linkCode kedalam Map
  linkCode.set(code, longUrl);
  urlAsli.set(longUrl, code);

  //kembalikan linkcode yang sudah dibuat
  return code;
};

//mengambil dari map apakah dari linkCode nya terdapat urlAsli nya
const decode = (shortUrl) => linkCode.get(shortUrl);

// contoh
const longUrl = "https://www.pikri1.com";
const shortUrl = encode(longUrl);
console.log("Short URL:", shortUrl); // Output: Short URL: http://tinyurl.com/(randomcode)

const longUrl2 = "https://www.pikri2.com";
const shortUrl2 = encode(longUrl2);
console.log("Short URL:", shortUrl); // Output: Short URL: http://tinyurl.com/(randomcode)

const decodedUrl = decode(shortUrl);
console.log("Decoded URL:", decodedUrl); // Output: Decoded URL: https://www.(example).com

linkCode
urlAsli