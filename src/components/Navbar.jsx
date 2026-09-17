import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getSiteInfo } from "../services/blogservice";
import logoImg from "../assets/imgs/logo.png";

export default function Navbar() {
  const [site, setSite] = useState(null);

  useEffect(function () {
    getSiteInfo().then(setSite);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-adasa sticky-top">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 text-white"
        >
          <div
            className="d-flex align-items-center justify-content-center p-1"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={logoImg}
              alt={site?.name || "عدسة"}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="d-flex flex-column lh-1">
            <strong className="text-white">{site?.name || "عدسة"}</strong>
            <small style={{ fontSize: ".7rem", color: "var(--adasa-muted)" }}>
              {site?.tagline || ""}
            </small>
          </div>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          style={{ color: "var(--adasa-text)" }}
        >
          <i className="bi bi-list fs-3" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav border border-orange border-1 rounded-4 px-4 mx-auto mb-3 mb-lg-0 gap-lg-1">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link">
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                من نحن
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-link text-white p-2">
              <i className="bi bi-search fs-5" />
            </button>
            <NavLink to="/blogs" className="btn btn-orange">
              ابدأ القراءة
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
