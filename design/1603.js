/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big
  this.medium = medium
  this.small = small
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
      case 1:
          return --this.big >= 0;
      case 2:
          return --this.medium >= 0;
      case 3:
          return --this.small >= 0;
      default:
          break;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

var obj = new ParkingSystem(1,1,0)
var car1 = obj.addCar(1)
var car2 = obj.addCar(2)
var car3 = obj.addCar(3)
var car4 = obj.addCar(1)