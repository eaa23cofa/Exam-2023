/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')


// Add this script tag to your HTML or include in your existing JavaScript file
function showAlert() {
    openModal();
  }

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  function allowAction() {
    alert("The page has now access to your location!");
    closeModal();
  }

  function denyAction() {
    alert("The page has NOT access to your location.");
    closeModal();
  }

  // for the showAlert function
  showAlert();



  