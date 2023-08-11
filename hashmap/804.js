const alphabet = {
   a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
   n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

var uniqueMorseRepresentations = function(words) {
  let morses = words.map((word) => {
   let chars = [...word];
   let morse = chars.map((char) => alphabet[char]).join("");
   return morse;
 });

 let uniqueSet = new Set(morses);
 return uniqueSet.size;
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"])); //2