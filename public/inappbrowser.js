const inappdeny_exec_vanillajs = (callback) => {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

const retrieveUserAgent = () => {
    return window.navigator.userAgent ?? window.navigator.vendor ?? window.opera;
};

const kakaotalkOpenExternalURL = (url) => {
    location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(url);
}

const lineOpenExternalBrowser = (url) => {
    if (url.indexOf('?') !== -1) {
        location.href = url + '&openExternalBrowser=1';
    } else {
        location.href = url + '?openExternalBrowser=1';
    }
};

const copytoclipboard = (val) => {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
};

const inappbrowserout = () => {
    copytoclipboard(window.location.href);
    alert('URL주소가 복사되었습니다.\n\nSafari가 열리면 주소창을 길게 터치한 뒤, "붙여놓기 및 이동"를 누르면 정상적으로 이용하실 수 있습니다.');
    location.href = 'x-web-search://?';
};

const openExternalBrowser = (url) => {
    const ua = retrieveUserAgent().toLowerCase();
    if (ua.match(/kakaotalk/i)) {
        kakaotalkOpenExternalURL(url);
    }
    else if (ua.match(/line/i)) {
        lineOpenExternalBrowser(url);
    }
};

window.openExternalBrowser = openExternalBrowser;