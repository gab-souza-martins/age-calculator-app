const dateForm = document.getElementById("dateForm");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

const dayDisplay = document.getElementById("dayDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const yearDisplay = document.getElementById("yearDisplay");

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
   } else if (
      dayValue < 1 ||
      dayValue > 31 ||
      (dayValue > 29 && monthValue == 2) ||
      (dayValue > 30 &&
         (monthValue == 4 ||
            monthValue == 6 ||
            monthValue == 9 ||
            monthValue == 11))
   ) {
      setErrorMsg(dayInput, "Insert a valid day");
   } else if (dayValue == 29 && monthValue == 2) {
      const isLeapYear = new Date(yearValue, 1, 29).getDate() === 29;
      if (!isLeapYear) {
         setErrorMsg(dayInput, "Inserted year is not a leap year");
      }
   } else {
      setSuccess(dayInput);
   }

   if (monthValue === "") {
      setErrorMsg(monthInput, "Month is required");
   } else if (monthValue < 1 || monthValue > 12) {
      setErrorMsg(monthInput, "Insert a valid month");
   } else {
      setSuccess(monthInput);
   }

   if (yearValue === "") {
      setErrorMsg(yearInput, "Year is required");
   } else if (yearValue < 1900 || yearValue > 3000) {
      setErrorMsg(yearInput, "Year must be between 1900 and 3000");
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
