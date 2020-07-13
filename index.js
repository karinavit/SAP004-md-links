const fs = require("fs");
//const myPath = require ()

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
      const allLinks = listComplete.map((i) => i.href);
      const mySet = new Set(allLinks);
      //console.log(allLinks)
      console.log ('Único: ' + mySet.size + ' Todos: ' + allLinks.length);
      
    }) 
   
  //module.exports = mdLinksFile;
//}



