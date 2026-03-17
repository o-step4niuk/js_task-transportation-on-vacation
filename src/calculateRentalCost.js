/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const smallOffer = 20;
  const bigOffer = 50;
  let totalAmount = 0;

  if (days < 3) {
    totalAmount = days * rentalCost;

    return totalAmount;
  }

  if (days >= 3 && days < 7) {
    totalAmount = days * rentalCost - smallOffer;

    return totalAmount;
  }

  if (days >= 7) {
    totalAmount = days * rentalCost - bigOffer;

    return totalAmount;
  }
}

module.exports = calculateRentalCost;
