const fs = require('fs');

filesInFolder(`${__dirname}/styles`)

function filesInFolder(defaultPath) {
    try {
        fs.readdir(defaultPath,  { withFileTypes: true }, (err, files) => {
            if (err)
              console.log(err);
            else {
              files.forEach(file => {
                if (file.isDirectory()) {
                    return
                } else {
                    let path = defaultPath + "/" + file.name
                    fileStat(file, path) 
                }
               
              })
            }
          })
    } catch (err) {
        console.error(err);
    }
}

function fileStat(file, path) {
    fs.stat(path, (err, stats) => {
        const ext = file.name.split(".")
        if(ext[1] !== "css") return
        readFileInfo(file)
    })
}

function readFileInfo(file) {
    fs.readFile(`${__dirname}/styles/${file.name}`,  (err, fileInfo) => {
        writeBunddle(fileInfo)
    });
}

function writeBunddle(fileInfo) {
    fs.appendFile(`${__dirname}/project-dist/bundle.css`, fileInfo, function(error){
        if(error) throw error; 
        console.log('The data was successfully written to the file!');
      });
}