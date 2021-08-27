function hello() {
<<<<<<< HEAD
  console.log(this);
  console.log(this == global);
=======
  console.log('==== hello function ====')
  console.log(this);
  console.log(this === global);
>>>>>>> 0a16a587912cd09adb3a178b8101ff56380ef283
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
<<<<<<< HEAD
  memberFunction() {
    console.log('------- Class ------');
    console.log(this);
    console.log(this == global);
=======

  memberFunction() {
    console.log('==== class this ====');
    console.log(this);
>>>>>>> 0a16a587912cd09adb3a178b8101ff56380ef283
  }
}

const a = new A(1);
a.memberFunction();

<<<<<<< HEAD
console.log('--- global scope ---');
console.log(this);
console.log(this == module.exports);
=======
console.log('==== global scope ====');
console.log(this);
console.log(this === module.exports);
>>>>>>> 0a16a587912cd09adb3a178b8101ff56380ef283
