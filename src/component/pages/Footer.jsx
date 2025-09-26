import { Link } from "react-router";
import { FaGithub, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row p-4 text-center">
        <div className="col-6">
          <strong>Follow Us On : </strong>
          <Link
            to="https://www.linkedin.com/in/zeeshanraza01"
            target="_blank"
            className="text-col"
          >
            {" "}
            <FaLinkedin className="me-3" />
          </Link>
          <Link
            to="https://leetcode.com/Zeeshan_Raza_44/"
            className="text-col"
            target="_blank"
          >
            <FaInstagram className="me-3" />
          </Link>
          <Link
            to="https://github.com/raza-zeeshan"
            target="_blank"
            className="text-col "
          >
            <FaGithub className="me-3" />
          </Link>
        </div>
        <div className="col-6 text-white">
          copyright &copy;
          {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}
