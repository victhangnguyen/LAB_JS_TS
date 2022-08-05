"use strict"
  class classA {
    constructor(name) {
      this.name = name;
    }
    //! expression method into constructor
    static staticMethod1 = function (name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
    };
  }

  //! add static method into contructor
  classA.staticMethod2 = function (name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  };

  const insClassA1 = new classA('Thang');
  console.log(insClassA1);
