const fs = require('fs');
const defaultPath = `${__dirname}/secret-folder`;

function filesInFolder(defaultPath) {
    try {
        fs.readdir(defaultPath,  { withFileTypes: true }, (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log("\nCurrent directory filenames:");
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
        console.log(ext[0], "-", ext[1], "-", stats.size);
    })
}

filesInFolder(defaultPath)