




let v = document.getElementById('validate');
    v.addEventListener(`click`, print);

      function print() {
          let firstNumber = parseInt(document.getElementById('first_number').value);
          let secondNumber = parseInt(document.getElementById('second_number').value);
          let result = (firstNumber % secondNumber);
          
          alert('Result : ' + result);
        }

// Step 7

let c = document.getElementById('validate');
    c.addEventListener(`click`, calculate);

      function calculate() {
          let shoeSize = parseInt(document.getElementById('shoe_size').value);
          let birthYear = parseInt(document.getElementById('year').value);
          //let result = (shoeSize * 2) + 5;
          //let result2 = (result * 50) - birthYear;
          //let result3 = result2 + 1776;
          let result = (((shoeSize *2)+5)*50 - birthYear) + 1776; 
          //alert(typeof(shoeSize * 2));
          alert('Result : ' + result);
      }


//Step 8
      
      let myForm = function() {
            let age = parseInt(document.getElementById('age').value);
      
          if (age > 18){
            alert("You are over 18.");
          }else {
            alert("You are under 18.");
          }
          
      }    
    
    

