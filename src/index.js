const fs = require("fs");


function mdLinksFile(file) {
   return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        const myRegex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;
        const listlinks = data.match(myRegex);
        const listComplete = listlinks.map((element) => {
           text = element.match(/\[([^\[\]]+)\]/)[1];
           href = element.match(/\((https?:\/\/[^\)]*)\)/)[1];
          return ({text,href,file});
          })
        resolve(listComplete);
        //console.log()
        
      }

    }); 
  });
}
  mdLinksFile(process.argv[2])
  .then((listComplete)=> {
    console.log(listComplete)
    return 'abacaxi';
  })
  .then((banana) => {
    console.log(banana)

  })



//function statsFile(){

 // const alllinks = mdLinksFile.map((i) => i.href);
 // let myArr = []; let myArr = []; const uniqueLinks = 
//}



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
