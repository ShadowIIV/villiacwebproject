
var form = document.getElementById('form')
form.addEventListener('sumbit',function(event){
event.preventDefault()

var username = document.getElementById('username').value
console.log(username)

var password = document.getElementById('password').value
console.log(password)


})

