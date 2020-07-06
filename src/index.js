const fs = require('fs');
let myArr = [];

function mdLinksFile(file) {
  return new Promise((resolve,reject) =>{
      fs.readFile(file, 'utf8',(err, data) => {
console.log(data)
console.log(err)
      } )
  })

}
mdLinksFile('/home/laboratoria/Documentos/SAP004-md-links/README.md')



//Estão funcionando para teste
/* const linguagens = require('./testando.json')
module.exports = { 
all: linguagens
} */


//Padrão da Laboratória
/* module.exports = () => {
  // ...
};
 */