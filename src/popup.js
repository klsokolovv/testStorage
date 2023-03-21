const login = document.querySelector('.login'),
    password = document.querySelector('.password'),
    url = document.querySelector('.url'),
    btnSave = document.querySelector('.save'),
    btnClear = document.querySelector('.clear');
    
let data = {};

btnSave.addEventListener('click', () => {
    data.login = login.value;
    data.password = password.value;

    const dataJson = JSON.stringify(data);
    
    chrome.storage.local.set({[url]: dataJson}).then(() => {
        console.log(`Запись ключа: ${url}, значение: ${dataJson}`);
    });

    chrome.storage.local.get([url]).then((result) => {
        console.log(`Получение ключа: ${url}, значение: ${result[url]}`);
    });
});

btnClear.addEventListener('click', () => {
    chrome.storage.local.clear();
});

chrome.runtime.sendMessage({type: 'getUrl'}, function (urlPage) {
    if (typeof urlPage == 'undefined') {
        console.error(`Сообщение не распознано: ${urlPage}`);
    } else {
        console.log(`Полученная ссылка: ${urlPage}`);
        return urlPage;
    }
});

console.log(`Ссылка: ${urlPage}`);

//Сделать считывание из файла
//Из файла формируется объект
//Объект импортируется в local.storage