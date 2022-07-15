const password = "ihatetheocean96"
let regExp = /[a-z0-9]/g;

if (password.length < 10){
    console.log("password too small")
} else if (password.length > 20){
    console.log("password too big")
} if (!(regExp.test(password))){
    console.log("password contains letters and numbers")
} else {
    console.log("Password was successful")
}
