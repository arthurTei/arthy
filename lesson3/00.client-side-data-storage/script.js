/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #3 - July 13th, 2017
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|  https://github.com/madmurphy/cookies.js
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          /*
          Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
          version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
          the end parameter might not work as expected. A possible solution might be to convert the the
          relative time to an absolute time. For instance, replacing the previous line with:
          */
          /*
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
          */
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};


'use strict'


document.cookie = `lang=fr;expires=${new Date ('2019-02-06')}`


docCookies.setItem('lang', 'ES', new Date ('2019-02-06'));
docCookies.setItem('previewSeen', true, new Date('2019-02-06'));



console.log('previewSeen', docCookies.getItem('previewSeen'));

docCookies.setItem('userId', 123);

docCookies.setItem('userId', 321);

docCookies.setItem('test', 'test', new Date('2000-01-01'));

// const user1 = {
//   id: 1,
//   name: 'Thibaud'
// }
// docCookies.setItem('user',JSON.stringify(user1));

const myUser = docCookies.getItem('user');
console.log('myUser', myUser);
// const parsedUser = JSON.parse('myUser')
// console.log('parsedUser', parsedUser);

// const emails = ['a@ynov.com', 'b@ynov.com', 'c@ynov.com']
// docCookies.setItem('emails', JSON.stringify(emails))
// const emailsFromCookies = docCookies.getItem('emails')
// console.log('emailsFromCookies', emailsFromCookies)

// const parsedEmails = JSON.parse(emailsFromCookies)
// console.log('parsedEmails', parsedEmails)




//   const cookiesBanner = document.querySelector('#cookies');
//   const cookiesBtn = document.querySelector('#cookies-btn');

// const isAccepted = docCookies.getItem('cookiesAccepted')
// console.log('isAccepted', isAccepted);
// if (isAccepted && isAccepted === 'true') {
//   cookiesBanner.style.display = 'none';
// } else {
//   console.log('Should be visible')
//   cookiesBanner.style.display = 'block';
// }


// cookiesBtn.addEventListener('click', () => {
//   docCookies.setItem('cookiesAccepted', true, new Date('2019-02-15'));
// })

const ads = {top:1, bottom: 2};

if (localStorage) {
  localStorage.setItem('greeting', 'Hello World');
  localStorage.setItem('adIds', JSON.stringify(ads));
}
if (sessionStorage) {
  sessionStorage.setItem('greeting', 'Hello World');
  sessionStorage.setItem('adIds', JSON.stringify(ads));
}
