const path = require('path');
const fs = require('fs');

function copyDir() {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory has been created!');
    });
    try {
        fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, list) => {
            if (err)
                console.log(err);
            else {
                list.forEach(file => {
                    fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name),  err => {
                        if (err) console.log(err);
                    })
                })
            }
        })
    } catch (err) {
        console.error(err);
    }
    console.log('Directory has been copied!');
}

copyDir();

    

