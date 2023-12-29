function selectCard(event) {
  alert(
    "Vous avez sélectionné la carte avec l'ID : " +
      event.target.getAttribute("id")
  );
}
