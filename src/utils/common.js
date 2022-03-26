export const formatNumber = (num) => new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);

export const dataFormater = (number, decimalAllowed = false) => {
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