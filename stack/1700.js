class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const countStudents = function(students, sandwiches) {
  const queue = new Queue();

  //masukkan semua student kedalam antrian
  for (const student of students) {
    queue.enqueue(student);
  }

  let count = 0;
  //lakukan perulangan jika antrian masih ada atau count lebih kecil dari antrian
  while (!queue.isEmpty() && count < queue.size()) {

    //jika antrian terdepan sama dengan sandwiches paling depan
    if (queue.front() === sandwiches[0]) {
      count = 0;
      //hapus antrian paling depan
      queue.dequeue();
      //hapus sandwiches paling depan
      sandwiches.shift();
    } else {
      //jika tidak maka tambahkan count, bertanda perulangan masih berjalan
      count++;
      //hapus antrian paling depan, lalu tambahkan ke paling belakang
      queue.enqueue(queue.dequeue());
    }
  }

  //return sisa antriannya
  return queue.size();
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])); // 3
