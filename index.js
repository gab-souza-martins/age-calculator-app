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

   let validDay = false;
   let validMonth = false;
   let validYear = false;

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
      let isLeapYear = new Date(yearValue, 1, 29).getDate() === 29;
      if (!isLeapYear) {
         setErrorMsg(dayInput, "Inserted year is not a leap year");
      } else {
         setSuccess(dayInput);
         validDay = true;
      }
   } else {
      setSuccess(dayInput);
      validDay = true;
   }

   if (monthValue === "") {
      setErrorMsg(monthInput, "Month is required");
   } else if (monthValue < 1 || monthValue > 12) {
      setErrorMsg(monthInput, "Insert a valid month");
   } else {
      setSuccess(monthInput);
      validMonth = true;
   }

   if (yearValue === "") {
      setErrorMsg(yearInput, "Year is required");
   } else if (yearValue < 1900 || yearValue > 3000) {
      setErrorMsg(yearInput, "Year must be between 1900 and 3000");
   } else {
      setSuccess(yearInput);
      validYear = true;
   }

   if (validDay && validMonth && validYear) {
      calculateAge();
   }
}

function calculateAge() {
   const currentDate = new Date();
   const inputDate = new Date(
      `${yearInput.value}-${monthInput.value}-${dayInput.value}`
   );
   const resultDate = currentDate.getTime() - inputDate.getTime();

   let resultDays = Math.floor(resultDate / (1000 * 3600 * 24));
   let resultMonths = Math.floor(resultDays / (365.25 / 12));
   let resultYears = Math.floor(resultMonths / 12);

   resultDays = Math.floor(resultDays - resultMonths * (365.25 / 12));
   resultMonths = Math.floor(resultMonths - resultYears * 12);

   if (currentDate.getTime() < inputDate.getTime()) {
      setErrorMsg(dayInput, "Cannot be future date");
      setErrorMsg(monthInput, "Cannot be future date");
      setErrorMsg(yearInput, "Cannot be future date");
   } else {
      yearDisplay.textContent = resultYears;
      monthDisplay.textContent = resultMonths;
      dayDisplay.textContent = resultDays;
   }
}

function setErrorMsg(element, message) {
   const elementParent = element.parentElement;
   const errorDisplay = elementParent.querySelector(".error");
   const label = elementParent.querySelector("label");

   label.classList.add("errorText");
   element.classList.add("errorInput");
   errorDisplay.innerText = message;

   yearDisplay.textContent = "--";
   monthDisplay.textContent = "--";
   dayDisplay.textContent = "--";
}
function setSuccess(element) {
   const elementParent = element.parentElement;
   const errorDisplay = elementParent.querySelector(".error");
   const label = elementParent.querySelector("label");

   label.classList.remove("errorText");
   element.classList.remove("errorInput");
   errorDisplay.innerText = "";
}
