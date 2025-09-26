import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
              <p>Email: contact@zeeflix.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Movie Lane, Filmtown, CA 90210</p>

              <p>We look forward to hearing from you!</p>
              <h2>Get in Touch</h2>
              <p>You can also follow us :</p>
              <Link
                to="https://www.linkedin.com/in/zeeshanraza01"
                target="_blank"
                className="links"
              >
                <FaLinkedin className="me-3" />
              </Link>
              <Link
                to="https://leetcode.com/Zeeshan_Raza_44/"
                target="_blank"
                className="links"
              >
                <FaInstagram className="me-3" />
              </Link>
              <Link
                to="https://github.com/raza-zeeshan"
                target="_blank"
                className="links"
              >
                <FaGithub className="me-3" />
              </Link>
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
