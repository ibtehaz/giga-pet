$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Grogu", weight:"10", happiness:"5"};
    var clicked = "";
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness++;
      // Increase pet weight
      pet_info.weight++;
      clicked = "treat";
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness++; 
      // Decrease pet weight
      pet_info.weight--;
      clicked = "play";
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness--;
      // Decrease pet weight
      pet_info.weight--;
      clicked = "exercise";
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      updatePetImageInHTML();
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }

    function updatePetImageInHTML() {

      let sound = new Audio;

      switch(clicked) {
        case "treat":
          $('.pet-image').attr("src", "assets/images/eat.webp");
          sound.src = "assets/sound/burp.mp3";
          sound.play();
          alert("Grogu is hungry. Give him chicken nuggets and he will be happy!");
          break;
        case "play":
          $('.pet-image').attr("src", "assets/images/play.gif");
          sound.src = "assets/sound/play.mp3";
          sound.play();
          alert("Grogu must play with you. What a great day!");
          break;
        case "exercise":
          $('.pet-image').attr("src", "assets/images/exercise.webp");
          sound.src = "assets/sound/exercise.mp3";
          sound.play();
          alert("Grogu must learn to use the force. This is the way!");
          break;
      }
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      // Add conditional so if happiness is lower than zero, set it back to zero
      if (pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  