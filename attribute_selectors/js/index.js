// Select all radio buttons
const radioButtons = document.querySelectorAll('.avatarRadio input[type="radio"]');
const resetButton = document.getElementById('resetButton');

// Add an event listener to detect when a radio button is selected
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Delete a class style from not selected elements
    
    radioButtons.forEach((otherRadio) => {
      if (otherRadio !== radio) {
        otherRadio.parentElement.classList.add('unselected-style');
      }
    });
  });
});

resetButton.addEventListener('click', () =>{
  radioButtons.forEach((radio) => {
    if (radio.checked){
      radio.checked = false;
    }
    radio.parentElement.classList.remove('unselected-style');
  });
});
