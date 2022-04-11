$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.scold-button').click(clickedScoldButton);
    
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Grogu", weight:"10", happiness:"5", force: "1"};
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
      pet_info.force++;
      clicked = "exercise";
      checkAndUpdatePetInfoInHtml();
    }
    function clickedScoldButton() {
      // Decrease pet happiness
      pet_info.happiness--;
      pet_info.force--;
      clicked = "scold";
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
          $('.speaktext').text("Grogu is hungry. Give him chicken nuggets and he will be happy!");
          break;
        case "play":
          $('.pet-image').attr("src", "assets/images/play.gif");
          sound.src = "assets/sound/play.mp3";
          sound.play();
          $('.speaktext').text("Grogu is bored. Play with him, he will be happy  and lose weight!");
          break;
        case "exercise":
          $('.pet-image').attr("src", "assets/images/exercise.webp");
          sound.src = "assets/sound/exercise.mp3";
          sound.play();
          $('.speaktext').text("Grogu must learn to use the force. Exercise he must!");
          break;
        case "scold":
            $('.pet-image').attr("src", "assets/images/sad.gif");
            sound.src = "assets/sound/grunt.mp3";
            sound.play();
            $('.speaktext').text("Grogu is sad. Scold him, he will be unhappy and join the dark side!");

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
      // Add conditional for force 
      if (pet_info['force'] < 0) {
        pet_info['force'] = 0;
      }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.force').text(pet_info['force']);
    }
  