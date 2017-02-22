function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('input fields can\'t be blank');
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    alert('age must be a number');
  }
  return false;
}

document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('color').value;
  var body = document.getElementById('body');
  body.style.background = color;
});

document.getElementById('hide').addEventListener('click', function() {
  var body = document.getElementById('body');
  body.style.display = "none";
});
