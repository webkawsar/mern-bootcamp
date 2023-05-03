
const path = require('path');
// console.log(path)


const targetPath = 'E:\development\web-developer-bd\mern-bootcamp\class_1\note.js';
// console.log(path.parse(targetPath))


const parsedPath = path.parse(targetPath);
// console.log(parsedPath.dir)
// console.log(parsedPath.base)
// console.log(parsedPath.ext)
// console.log(parsedPath.name)


// console.log(path.parse(__dirname))
// console.log(path.format({
//     root: 'E:\\',
//     dir: 'E:\\development\\web-developer-bd\\mern-bootcamp',
//     base: 'class_1',
//     ext: '',
//     name: 'class_1'
//   }))


// normalize path 
const targetPath2 =  'E:\\development//web-developer-bdmern-bootcamp\\class_1\\note.js';
// console.log(path.normalize(targetPath2), 'normalize')

// path join
console.log(path.join(__dirname, 'note.js'))
console.log(path.join(__dirname, '..', 'noteNai.js'))