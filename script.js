document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "supyaaaaa123@gmail.com" && password === "GIRISH-ANNA") {
        window.location.href="clone/index.html"
    } else {
        alert('Invalid Username or Password');
    }
});
