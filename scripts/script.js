import {
  calculateAge,
  getDay,
  getMont,
  getYer,
  isDatevalid,
} from "./utlise.js";

const cardinput = document.querySelectorAll(".card__input");
const sumbitButton = document.querySelector(".card__button");

const onClickHandler = () => {
  const yearElement = document.querySelector(".card__input[name=year]");
  const monthElement = document.querySelector(".card__input[name=month]");
  const dayElement = document.querySelector(".card__input[name=day]");
  const resultElement = document.querySelector(".card__resultValue");

  if (!isDatevalid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    return;
  }

  resultElement.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    dayElement.value,
  );
};

sumbitButton.addEventListener("click", onClickHandler);
cardinput.forEach((item) => {
  item.addEventListener("keydown", (element) => {
    element.key === "Enter" && onClickHandler();
  });
});