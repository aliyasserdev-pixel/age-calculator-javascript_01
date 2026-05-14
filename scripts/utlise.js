const calculateAge = (year, month, day) => {
  const toDay = new Date();
  const birthDate = new Date(year, month, day);
  let age = toDay.getFullYear() - birthDate.getFullYear();
  const monthDiff = toDay.getMonth() - birthDate.getMonth();

  if (monthDiff > 0 || (monthDiff < toDay.getDate() && birthDate.getDate())) {
    age--;
  }
  return age;
};

const getDay = (day) => {
  if (day && day > 0 && day <= 31) return true;
};

const getMont = (month) => {
  if (month && month > 0 && month <= 12) return true;
};

const getYer = (year) => {
  const value = new Date().getFullYear();
  if (year && year > 0 && year <= value) return true;
};

const isDatevalid = (dayElement, monthElement, yearElement) => {
  let isValid = [false, false, false];
  if (!getDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!getMont(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }

  if (!getYer(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};

export { calculateAge, getDay, getMont, getYer, isDatevalid };
