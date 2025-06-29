const dateForm = document.getElementById("dateForm");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

dayInput.onkeydown = (event) => {
   numbersOnly(event);
};
monthInput.onkeydown = (event) => {
   numbersOnly(event);
};
yearInput.onkeydown = (event) => {
   numbersOnly(event);
};
function numbersOnly(event) {
   if (isNaN(event.key) && event.key !== "Backspace") {
      event.preventDefault();
   }
}

dateForm.addEventListener("submit", (event) => {
   event.preventDefault();

   validateInputs();
});

function validateInputs() {
   const dayValue = dayInput.value.trim();
   const monthValue = monthInput.value.trim();
   const yearValue = yearInput.value.trim();

   if (dayValue === "") {
      setErrorMsg(dayInput, "Day is required");
   } else {
      setSuccess(dayInput);
   }

   if (monthValue === "") {
      setErrorMsg(monthInput, "Month is required");
   } else {
      setSuccess(monthInput);
   }

   if (yearValue === "") {
      setErrorMsg(yearInput, "Year is required");
   } else {
      setSuccess(yearInput);
   }
}

function setErrorMsg(element, message) {
   const elementParent = element.parentElement;
   const errorDisplay = elementParent.querySelector(".error");
   const label = elementParent.querySelector("label");

   label.classList.add("errorText");
   element.classList.add("errorInput");
   errorDisplay.innerText = message;
}

function setSuccess(element) {
   const elementParent = element.parentElement;
   const errorDisplay = elementParent.querySelector(".error");
   const label = elementParent.querySelector("label");

   label.classList.remove("errorText");
   element.classList.remove("errorInput");
   errorDisplay.innerText = "";
}
