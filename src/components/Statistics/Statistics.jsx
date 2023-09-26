import Chart from "react-google-charts";
import { getStoredDonationFromLocal } from "../../utility/localstorage";

const Statistics = () => {
  const totalDonation = 40;
  const yourDonation = getStoredDonationFromLocal()?.length || 0;

  // make percentage
  const yourDonationPercentage = (yourDonation / totalDonation) * 100;
  const totalDonationPercentage = 100 - yourDonationPercentage;

  const data = [
    ["Donation", "Percentage"],
    ["Total Donation", totalDonationPercentage],
    ["Your Donation", yourDonationPercentage],
  ];

  const options = {};

  return (
    <div className="container mx-auto grid place-content-center min-h-[90vh]">
      <div className="h-[350px] sm:h-[700px] md:h-[900px] w-[350px] sm:w-[900px] md:w-[700px]">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Statistics;
