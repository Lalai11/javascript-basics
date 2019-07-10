function clearAll(){
  
  let answer = confirm("Do you want to reset form?");
  
  if (answer) {
   
    document.getElementById("myForm").reset();
    
    let inputs = document.querySelectorAll("input[type=text]");
    
    for (i = 0; i < inputs.length; i++){
      inputs[i].value = "";
    }  

  }

}
