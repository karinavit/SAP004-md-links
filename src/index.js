const fs = require("fs");


function mdLinksFile(file) {
  let myArr = [];
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        const myRegex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;
        const links = data.match(myRegex);
        links.forEach((element) => {
           text = element.match(/\[([^\[\]]+)\]/)[1];
           href = element.match(/\((https?:\/\/[^\)]*)\)/)[1];
          myArr.push({text,href,file});
          })
        resolve(myArr);
        console.log(myArr)
        
      }
    }); 
  });
}
mdLinksFile(process.argv[2]);
//console.log(process.argv[1]);

//module.exports = mdLinksFile
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
