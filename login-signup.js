
if (document.location.pathname == '/login-or-signup.html'){
  //if Log In is clicked
  document.getElementById("log-in").addEventListener("click", function(){
    //removes hide from log-in-container
    if (document.getElementById("log-in-container").classList.contains('hide')){
      document.getElementById("log-in-container").classList.remove('hide')
    }
    //adds hide to sign-up container
    if (!(document.getElementById("sign-up-container").classList.contains('hide'))){
      document.getElementById("sign-up-container").classList.add('hide')
    }
    //removes active from sign-up
    if (document.getElementById("sign-up").classList.contains('active')){
      document.getElementById("sign-up").classList.remove('active')
    }
    //adds active to log-in
    if (!(document.getElementById("log-in").classList.contains('active'))){
      document.getElementById("log-in").classList.add('active')
    }
  })
  //if Sign Up is clicked
  document.getElementById("sign-up").addEventListener("click", function(){
    //removes hide from sign-up-container
    if (document.getElementById("sign-up-container").classList.contains('hide')){
      document.getElementById("sign-up-container").classList.remove('hide')
    }
    //adds hide from log-in container
    if (!(document.getElementById("log-in-container").classList.contains('hide'))){
      document.getElementById("log-in-container").classList.add('hide')
    }
    //removes active from log-in
    if (document.getElementById("log-in").classList.contains('active')){
      document.getElementById("log-in").classList.remove('active')
    }
    //adds active to sign-up
    if (!(document.getElementById("sign-up").classList.contains('active'))){
      document.getElementById("sign-up").classList.add('active')
    }
  })

  //if login button is clicked
  document.getElementById('log-in-button').addEventListener('click', function(){
    var email = document.getElementById('email').value
    var password = document.getElementById('email').value
    console.log(email, password)
  })

  //if sign-in button is clicked
  document.getElementById('sign-up-button').addEventListener('click', function(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('email').value
    var confirmPassword = document.getElementById('confirm-password').value
    console.log(name, email, password, confirmPassword)
  })
}
