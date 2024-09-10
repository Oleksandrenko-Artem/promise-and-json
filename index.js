const myPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    console.log(random);
    if (random > 0.5) {
        resolve('All good! random = ' + random);
    } else {
        reject('Error! random = ' + random);
    }
});

myPromise
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(err);
    })
    .finally(() => {
        console.log('finally');
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.table(json))
    .catch((error) => { console.log(error) })
    
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.table(json))
    .catch((error) => {console.log(error)})