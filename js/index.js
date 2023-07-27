function Calculator(base) {
  this.num = base;

  this.add = function (number) {
    if (!isNaN(number)) {
      this.num += number;
    }
  };

  this.sub = function (number) {
    if (!isNaN(number)) {
      this.num -= number;
    }
  };

  this.set = function (number) {
    if (!isNaN(number)) {
      this.num = number;
    }
  };

  this.get = function () {
    return this.num;
  };

  this.reset = function () {
    this.num = base;
  };
}

const calc = new Calculator(100);

calc.add(25);
calc.sub(35);
console.log(calc.get());
