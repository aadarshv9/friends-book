export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export function appendScript(scriptToAppend) {
  const script = document.createElement('script');
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}
