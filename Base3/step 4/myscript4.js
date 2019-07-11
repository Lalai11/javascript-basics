

function testPassword(){
  let firstPass = document.getElementById("password");
  let secondPass = document.getElementById("confirmation");

  if (firstPass.value == secondPass.value){
    firstPass.style = "border:3px solid green;"
    secondPass.style = "border:3px solid green;"
  }else{
    firstPass.style = "border:3px solid red;"
    secondPass.style = "border:3px solid red;"
  
  }
}

