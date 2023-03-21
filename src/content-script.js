const currentLocation = window.location.href;
console.log(`Ссылка: ${currentLocation}`);

chrome.runtime.sendMessage({type: 'setUrl', urlPage: currentLocation});

//chrome.storage.local.get([urlFile]).then((result) => {
    //console.log(`Key: ${urlFile}, value: ${result[urlFile]}`);
//});
