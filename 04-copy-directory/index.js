const path = require('path');
const fs = require('fs');

fs.stat(path.join(__dirname, 'files-copy'), function(err) {
    if (!err) {
        fs.rm(path.join(__dirname, 'files-copy'), { recursive:true, force:true }, (err) => { 
        if (err) {
            console.log(err);
            
        }
        copyDir();
            
        });
    } else {
        copyDir();
    }
        
    
});



function copyDir() {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true, force:true }, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory has been copied!');
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
        console.log(err);
    }
    console.log('Directory has been created!');
}



    

