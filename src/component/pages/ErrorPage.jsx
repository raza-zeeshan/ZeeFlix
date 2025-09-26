export default function ErrorPage() {
  return (
    <div className="error-page text-center mt-5">
      <figure className="mb-5">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
          alt="404 not found"
          //   className="img-fluid"
          style={{ width: "400px", height: "400px" }}
        />
      </figure>
      <strong>
        <h3>Oops! Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
      </strong>
    </div>
  );
}
