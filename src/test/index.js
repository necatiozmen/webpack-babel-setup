const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '/subtest/index.js')



console.log(process.env.NODE_ENV)

fs.openSync(filePath, 'a');
console.log("__dir", __dirname)



