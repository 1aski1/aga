function injectStyles() {
    const starEmptyUrl = chrome.runtime.getURL("1.png");
    const starFullUrl = chrome.runtime.getURL("2.png");
    const style = document.createElement('style');
    style.textContent = `
        /* 1. Базовые настройки иконки */
        .LikeLink .like2Icon {
            background-repeat: no-repeat !important;
            background-size: contain !important;
            background-position: center !important;
            display: inline-block !important;
            width: 20px;
            height: 20px;
            content: "" !important;
        }
        .LikeLink .like2Icon::before, 
        .LikeLink .like2Icon::after {
            display: none !important;
            content: "" !important;
        }
        .LikeLink.like .like2Icon {
            background-image: url("${starEmptyUrl}") !important;
        }
        .LikeLink.unlike .like2Icon {
            background-image: url("${starFullUrl}") !important;
        }
    `;
    document.head.appendChild(style);
}

injectStyles();