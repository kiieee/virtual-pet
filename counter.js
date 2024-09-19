let counter = 10;
  let foodCount = 10;
 
  function updateCounter() {
    if (counter === 0) {
     
      foodCount--;
      document.getElementById("foodCount").textContent = "Food: " + foodCount;
    }
   
    if (counter === 0) {
      document.getElementById("tCounter").textContent = "NomNomNom!";
 
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

