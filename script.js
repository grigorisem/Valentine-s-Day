let noButton = document.getElementById("no-button");
let yesButton = document.getElementById("yes-button");
let noClicks = 0;
noButton.addEventListener("click", function () {
  if (noClicks === 0) {
    yesButton.textContent = "Please!";
  } else if (noClicks === 1) {
    yesButton.textContent = "Pretty please!";
  } else if (noClicks > 1) {
    noButton.remove();
    yesButton.classList.add("emoji");
    yesButton.innerHTML = "&#128521;";
  }
  noClicks++;
});
