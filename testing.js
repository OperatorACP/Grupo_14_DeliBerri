const bcryptjs = require('bcryptjs')


console.log(bcryptjs.hashSync('abc123', 10))