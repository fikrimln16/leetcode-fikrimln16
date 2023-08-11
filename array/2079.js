var wateringPlants = function(plants, capacity) {
   
   let steps = 0
   let water = capacity
   for (let index = 0; index < plants.length; index++) {
      let plant = plants[index];

      if (plant <= water) {
         //tambahkan steps
         steps++;
         //kurangi water sesuai kebutuhan tanaman
         water = water - plant;
      } else {
         //reset water menjadi full lagi
         water = capacity;

         //rumus jika kembali dan datang lagi
         let additionalSteps = index * 2 + 1;

         //tambahkan ke steps
         steps += additionalSteps;

         //kurangi water sesuai kebutuhan tanaman
         water = water - plant;
      }
   }

   return steps

};

console.log(wateringPlants([7,7,7,7,7,7,7], 8));