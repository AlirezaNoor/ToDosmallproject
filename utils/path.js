 const { fileURLToPath } =require('url') ;
 const { dirname } = require('path');

 const path = require('path');

 module.exports = path.dirname(require.main.filename);