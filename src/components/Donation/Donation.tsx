import React, { useState } from "react";
import data from "../../../public/data.json";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const [dataCount, setDataCount] = useState(4);
  const navigate = useNavigate();

  const handleViewDetails = (donation) => {
    navigate(`/donation/${donation.id}`, { state: { donation } });
  };
  return (
    <>
      <div className="container mx-auto my-40">
        <div className="mx-2 grid gap-4 grid-cols-1 md:grid-cols-2">
          {data?.slice(0, dataCount)?.map((donation, index) => {
            return (
              <div
                key={index}
                className={`rounded-lg sm:flex items-start bg-[${donation.card_bg}]`}
              >
                <img
                  src={donation.picture}
                  alt={donation.title}
                  className="block h-[200px] w-full sm:w-[200px] object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
                />

                <div className="p-4">
                  <div
                    className={`inline-block px-3 py-1 rounded-md capitalize font-semibold text-[${donation.color}] bg-[${donation.category_bg}]`}
                  >
                    <span>{donation.category}</span>
                  </div>

                  <h3 className={`text-2xl font-bold my-2`}>
                    {donation.title}
                  </h3>
                  <h4 className={`text-lg font-bold text-[${donation.color}]`}>
                    ${donation.price}
                  </h4>

                  <button
                    className={`rounded font-semibold text-white capitalize py-2 px-6 mt-4 bg-[${donation.color}]`}
                    onClick={() => handleViewDetails(donation)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`place-content-center mt-12 ${
            dataCount >= data.length ? "hidden" : "grid"
          }`}
        >
          <button
            className="btn btn-success px-8 capitalize text-white"
            onClick={() => setDataCount(data.length)}
          >
            See All
          </button>
        </div>
      </div>
    </>
  );
};

export default Donation;
