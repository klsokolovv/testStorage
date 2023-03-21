chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case 'setUrl':
                temp = message.urlPage;
                break;
            case 'getUrl':
                sendResponse(temp);
                break;
            default:
                console.error(`Сообщение не распознано: ${message}`);
        }
    }
);