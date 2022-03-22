export const dataFormater = (number, decimalAllowed = false) => {
    console.log(decimalAllowed)
  if (number > 1000000000) {
    return Number.parseFloat(number / 1000000000).toFixed(decimalAllowed ? 2 : 0).toString() + "B";
  } else if (number > 1000000) {
    return Number.parseFloat(number / 1000000).toFixed(decimalAllowed ? 2 : 0).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toFixed(decimalAllowed ? 2 : 0).toString() + "K";
  } else {
    return number.toString();
  }
};
