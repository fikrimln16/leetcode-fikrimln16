function printlove(n) {
  for (let i = n / 2; i < n; i += 2) {
    let line = "";

    // Tampilkan spasi pertama
    for (let j = 1; j < n - i; j += 2) {
      line += " ";
    }

    // Tampilkan bintang pertama
    for (let j = 1; j < i + 1; j++) {
      line += "*";
    }

    // Tampilkan spasi kedua
    for (let j = 1; j < n - i + 1; j++) {
      line += " ";
    }

    // Tampilkan bintang kedua
    for (let j = 1; j < i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }

  // Bagian bawah love
  for (let i = n; i > 0; i--) {
    let line = "";

    // Tampilkan spasi
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }

    // Tampilkan bintang
    for (let j = 1; j < i * 2; j++) {
      line += "*";
    }

    console.log(line);
  }
}

// Contoh pemanggilan fungsi printlove dengan n = 6
printlove(10);
