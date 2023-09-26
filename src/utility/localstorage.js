export const getStoredDonationFromLocal = () => {
  const donation = localStorage.getItem("donation");
  if (donation) {
    return JSON.parse(donation);
  } else {
    return [];
  }
};

export const saveDonationToLocal = (donationId) => {
  const storedDonation = getStoredDonationFromLocal();
  const isExist = storedDonation.find((item) => item.id === donationId);

  if (!isExist) {
    storedDonation.push({ id: donationId });
    localStorage.setItem("donation", JSON.stringify(storedDonation));
  }
};
