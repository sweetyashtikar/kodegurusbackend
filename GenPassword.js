const bcrypt = require('bcrypt');

let pswrd = bcrypt.hash.Sync('12345',9);
console.log(pswrd);