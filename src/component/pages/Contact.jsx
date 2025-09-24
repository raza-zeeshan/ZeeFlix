export default function Contact() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row m-5">
            <div className="col-6 my-5">
              <h1>
                <strong>Contact Us</strong>
              </h1>
              <p>
                If you have any questions or feedback, feel free to reach out to
                us!
              </p>
            </div>

            <div className="col-6 my-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
