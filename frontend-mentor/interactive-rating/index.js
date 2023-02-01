const buttons = document.querySelectorAll(".rating-button");

buttons.forEach((button) => {
  button.addEventListener("click", function onClick() {
    buttons.forEach((btn) => {
      btn.dataset.chosen = "false";
    });
    button.dataset.chosen = "true";
  });
});

const submitButton = document.getElementById("submit-button");
const ratingPage = document.getElementById("rating");
const thankYouPage = document.getElementById("thank-you");

submitButton.addEventListener("click", () => {
  ratingPage.style.display = "none";
  thankYouPage.style.display = "flex";
  const chosen = document.querySelector("[data-chosen='true']");
  document.getElementById(
    "selection-value"
  ).innerHTML = `&nbsp;${chosen.dataset.value}&nbsp;`;
});
