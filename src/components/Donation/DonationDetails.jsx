import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import data from "../../../public/data.json";
import { saveDonationToLocal } from "../../utility/localstorage";

const DonationDetails = () => {
  const { donationId } = useParams();
  const donation = data?.find((donation) => donation.id === Number(donationId));

  const handleDonate = () => {
    saveDonationToLocal(donationId);
    Swal.fire({
      title: "Success!",
      text: "Than you for your donation!",
      icon: "success",
    });
  };
  return (
    <div className="my-32 container mx-auto">
      <div className="relative">
        <img
          src={donation?.picture}
          alt={donation?.title}
          className="block h-[80vh] w-full rounded-lg"
        />
        <div className="absolute w-[100%] bottom-0 left-0 p-8 bg-black bg-opacity-50">
          <button
            className={`bg-[${donation?.color}] text-white px-8 py-3 rounded-lg text-lg font-bold flex items-center justify-center gap-2`}
            onClick={handleDonate}
          >
            <span>Donate</span>
            <span>${donation?.price}</span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold">{donation?.title}</h1>
        <p className="text-gray-500 mt-4">{donation?.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
