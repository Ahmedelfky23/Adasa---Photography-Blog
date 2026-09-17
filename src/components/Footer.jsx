import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSiteInfo, getCategories } from "../services/blogservice";

export default function Footer() {
  const [site, setSite] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(function() {
    getSiteInfo().then(setSite);
    getCategories().then(setCategories);
  }, []);

  return (
    <footer className="footer-adasa mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="footer-logo">
                <i className="bi bi-camera-fill text-white" />
              </div>

              <strong className="fs-5 text-white">عدسة</strong>
            </div>

            <p className="footer-description">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            {site?.social && (
              <div className="d-flex gap-2 mt-3">
                {Object.entries(site.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <i
                      className={`bi bi-${socialIcons[key] || "link-45deg"}`}
                    />{" "}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="col-6 col-lg-2">
            <h6>استكشف</h6>
            <Link to="/">الرئيسية</Link>
            <Link to="/blogs">المدونة</Link>
            <Link to="/about">من نحن</Link>
          </div>

          <div className="col-6 col-lg-3">
            <h6>التصنيفات</h6>

            {categories.map((category) => (
              <Link key={category.name} to={`/blogs?cat=${category.name}`}>
                {category.name}
              </Link>
            ))}
          </div>

          <div className="col-12 col-lg-3">
            <h6>ابقَ على اطلاع</h6>

            <p className="newsletter-description">
              اشترك ليصلك أحدث المقالات والتحديثات
            </p>

            <div className="d-flex flex-column gap-2">
              <input
                type="email"
                className="form-control form-control-dark"
                placeholder="أدخل بريدك الإلكتروني"
              />

              <button className="btn btn-orange">اشترك</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-wrap justify-content-between gap-3 small">
          <span>© 2026 عدسة — جميع الحقوق محفوظة</span>

          <div className="d-flex gap-3">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialIcons = {
  twitter: "twitter-x",
  github: "github",
  linkedin: "linkedin",
  youtube: "youtube",
};
