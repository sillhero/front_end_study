new Promise((resolve, reject) => {

    resolve(1);

    reject(2);

    resolve(3);

})

    .then((res) => {
        console.log(res);

    })

    .catch((err) => {

        console.log(err);

    });