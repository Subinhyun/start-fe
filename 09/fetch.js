fetch('data.json')
    .then(function(response){
    response.json().then(function(data){
        // console.log(response);
        console.log('json data:',data);
    });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
});

function getFetch(url, callback) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

// const url = "https://naver.com/mjddjgeghkdijejnciaefnkjmkafnnje/src/devices.json"


getFetch('data.json', (data) => console.log(data));

