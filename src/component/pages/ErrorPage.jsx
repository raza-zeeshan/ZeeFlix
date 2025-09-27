// import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="container-fluid text-center my-2">
      <figure className="">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
          alt="404 not found"
          style={{ width: "400px", height: "400px" }}
        />
      </figure>
      <strong>
        <h3>Oops! Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
      </strong>
      <NavLink to="/" className="btn btn-info">
        Go to Home
      </NavLink>
    </div>
  );
}
