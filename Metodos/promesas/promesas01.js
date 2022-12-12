const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        console.log(number);
        if (number > 5)
            resolve(number)
        else
            reject(new Error('Menor a 5'))
    }, 1000);
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));