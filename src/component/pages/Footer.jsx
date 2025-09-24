import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row p-4 text-center">
        <div className="col-6">
          <Link
            to="https://www.linkedin.com/in/zeeshanraza01"
            target="_blank"
            className="text-col  me-4"
          >
            LinkedIn
          </Link>
          <Link
            to="https://leetcode.com/Zeeshan_Raza_44/"
            className="text-col  me-4"
            target="_blank"
          >
            LeetCode
          </Link>
          <Link
            to="https://github.com/raza-zeeshan"
            target="_blank"
            className="text-col "
          >
            Github
          </Link>
        </div>
        <div className="col-6 text-white">
          &copy;
          {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}
