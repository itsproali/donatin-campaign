const Banner = () => {
  return (
    <div className="h-[70vh] w-full bg-banner-bg bg-no-repeat bg-cover grid place-content-center">
      <div className="">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          I Grow By Helping People In Need
        </h2>

        <div className="form-control mt-12 grid place-content-center">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full sm:w-96"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
