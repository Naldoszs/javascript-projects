function calculateMoney(priceCent) {
  return (Math.floor((priceCent / 100) * 100) / 100).toFixed(2);
}

export default calculateMoney;
