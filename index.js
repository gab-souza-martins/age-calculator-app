const dateForm = document.getElementById("dateForm");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

dateForm.addEventListener("submit", (event) => {
   event.preventDefault();

   validateInputs();
});

function setErrorMsg(element, message) {
   const elementParent = element.elementParent;
   const errorDisplay = elementParent.querySelector(".errorText");
   const label = elementParent.querySelector("label");

   label.classList.add("errorText");
   element.classList.add("errorInput");
   errorDisplay.innerText = message;
}

function validateInputs() {
   const dayValue = dayInput.value.trim();
   const monthValue = monthInput.value.trim();
   const yearValue = yearInput.value.trim();
}
