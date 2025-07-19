
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeButton = document.querySelector(".close-button");
const card = document.querySelector(".card");


openModalBtn.addEventListener('click', function() {
  modal.classList.add("active"); 
  card.classList.add("hidden"); 
});


closeButton.addEventListener('click', function() {
  modal.classList.remove("active"); 
  card.classList.remove("hidden"); 
});


window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.remove("active"); 
    card.classList.remove("hidden"); 
  }
});


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
        card.classList.remove("hidden");
    }
});