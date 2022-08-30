export default function getQueryParam(key) {
  if (!key) {
    return false;
  }

  let value = '';
  let paramStr = window.location.search ? window.location.search.substr(1) : '';

  if (paramStr) {
    paramStr.split('&').forEach(function (param) {
      let arr = param.split('=');
      if (arr[0] == key) {
        value = arr[1];
      }
    });
  }

  return value;
}