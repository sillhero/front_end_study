const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/1.html', (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data);
    })
});

p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason.code);
})