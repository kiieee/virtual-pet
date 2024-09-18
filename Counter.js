// let counter = 0;

// function updateCounter() {
//   counter++;   
//   document.getElementById("tCounter").textContent = counter; 


// let counter = 0;

// function updateCounter() {
//   if (counter === 10) {
//     document.getElementById("tCounter").textContent = "Surprise!";
//     settimeout(function(){
//         counter = 0;
//         document.getElementById("tCounter").textContent = counter;
//     }, 10);
//   } else {
//     counter++;
//     document.getElementById("tCounter").textContent = counter;
//   }
// }
// setInterval(updateCounter, 1000);

  let counter = 10; 
  let foodCount = 10; 

function updateCounter() {
  
    
    if (counter === 0) {
      document.getElementById("tCounter").textContent = "Surprise!";
      foodCount--;
     document.getElementById("foodCount").textContent = "Food: " + foodCount;

    setTimeout(function() {
        counter = 10;
        document.getElementById("tCounter").textContent = counter;
      }, 1000); 
    } else {

      
      counter--;
      document.getElementById("tCounter").textContent = counter;
    }
  }
setInterval(updateCounter, 1000);




