import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto min-h-[100vh] grid place-content-center">
      <div className="text-center">
        <img src="/404-page.webp" alt="404" className="block text-center" />
        <button className="btn btn-primary">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
