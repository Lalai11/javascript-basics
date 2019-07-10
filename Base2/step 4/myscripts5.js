function clearAll(){
  let answer = confirm("Do you want to reset form?");
  if (answer) {
    document.getElementById("myForm").reset();

  }else{
    alert("not cleared");
  }

}
