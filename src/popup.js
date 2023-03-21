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
    
    chrome.storage.local.set({[urlFile]: dataJson}).then(() => {
        console.log(`Запись ключа: ${urlFile}, значение: ${dataJson}`);
    });

    chrome.storage.local.get([urlFile]).then((result) => {
        console.log(`Получение ключа: ${urlFile}, значение: ${result[urlFile]}`);
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
    }
});

console.log(`Ссылка: ${urlPage}`);