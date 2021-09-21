// log level
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

// assert : False 일 때만 출력
console.assert(2 == 3, 'not same!');
console.assert(2 == 2, 'same');

// print object 
const student = { name: 'john', age: 30, company: {name: 'iset'}};
console.log(student);
console.table(student);     // Table 형태로 출력
console.dir(student, {showHidden: true, color: false, depth: 0});

// 시간 측정
console.time('for loop');
for(let i = 0; i < 1000; i++) {
    i++
}
console.timeEnd('for loop');

function a() {
    console.count('function');
}

a();
a();
console.countReset('function');
a();

// trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace();
}

f1();