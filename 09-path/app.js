const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// 확장자명
console.log(path.extname(__filename));

const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// 절대경로인지?
console.log('isAbsolute?', path.isAbsolute(__filename));
console.log('isAbsolute?', path.isAbsolute('../'));

console.log(path.normalize('./folder////////sub/////'));

// os 별 대응가능
console.log(__dirname + '/' + 'image');
console.log(path.join(__dirname ,'image'));
