import data from "../../../public/data.json";

const DonationsHome = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="mx-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((donation, index) => {
          return (
            <div key={index} className={`rounded-lg bg-[${donation.card_bg}]`}>
              <img
                src={donation.picture}
                alt={donation.title}
                className="block h-[200px] w-full object-cover rounded-t-lg"
              />

              <div className="p-4">
                <div
                  className={`inline-block px-3 py-1 rounded-md capitalize font-semibold text-[${donation.color}] bg-[${donation.category_bg}]`}
                >
                  <span>{donation.category}</span>
                </div>

                <h3
                  className={`text-xl font-bold my-2 text-[${donation.color}]`}
                >
                  {donation.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonationsHome;
