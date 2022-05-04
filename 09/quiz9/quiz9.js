$url = document.querySelector('#url');
$btn = document.querySelector('#btn');
$log = document.querySelector('#log');

function getFetch() {
    const url = $url.value;
    if(!url) {
        window.alert('url을 입력하세요.');
    }

    fetch(url)
    .then((response) => response.text())
    .then((data) => $log.value = data)
    .catch((error) => $log.value = error);
}

function enterKey(e) {
    if(e.keyCode == 13) {
        getFetch();
    }
}

$btn.addEventListener('click', getFetch);
$url.addEventListener('keyup', enterKey);