function login() {
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (uname=="karan singh" && pass=="@karan6426")
    {
        location.assign('https://www.w3schools.com/default.asp')
    }
    else 
    {
        window.alert('login failed')
    }
}