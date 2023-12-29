
document.getElementById('change-name-btn').addEventListener('click', function() {
    let newName = document.getElementById('name-input').value;
    document.getElementById('displayed-name').innerText = newName;
  });
