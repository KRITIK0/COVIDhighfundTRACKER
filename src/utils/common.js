export const formatNumber = (num) => new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num)