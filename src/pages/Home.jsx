import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getBlogs, getCategories } from "../services/blogservice";
import Blogcard from "../components/Blogcard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
    getCategories().then(setCategories);
  }, []);

  const featured = blogs.filter((blog) => blog.featured).slice(0, 3);
  const latest = blogs.slice(0, 3);

  return (
    <div className="bg-grid">
      <section className="container text-center py-5">
        <div className="py-5">
          <span className="hero-pill mb-3">
            <i className="bi bi-stars" />
            مرحباً بك في عدسة
          </span>

          <h1 className="hero-title">
            اكتشف فن <span className="accent">التصوير الفوتوغرافي</span>
          </h1>

          <p className="hero-description">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <Link to="/blogs" className="btn btn-orange btn-lg">
              استكشف المقالات
              <i className="bi bi-arrow-left ms-1" />
            </Link>

            <a href="#featured" className="btn btn-outline-soft btn-lg">
              <i className="bi bi-info-circle ms-1" />
              اعرف المزيد
            </a>
          </div>

          <div className="row g-3 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-pencil" />
                <div className="num">50+</div>
                <div className="lbl">مقالة</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-people" />
                <div className="num">+10K</div>
                <div className="lbl">قارئ</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-folder" />
                <div className="num">{categories.length || 5}</div>
                <div className="lbl">تصنيف</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="bi bi-camera" />
                <div className="num">6</div>
                <div className="lbl">كاتب</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="container py-5">
        <div className="section-header">
          <div>
            <span className="hero-pill mb-2">
              <i className="bi bi-star-fill" />
              مميز
            </span>

            <h2 className="fw-bold mt-2 mb-0">مقالات مختارة</h2>

            <p className="text-muted">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>

          <Link
            to="/blogs"
            className="btn btn-outline-soft d-none d-md-inline-flex"
          >
            عرض الكل
            <i className="bi bi-arrow-left" />
          </Link>
        </div>

        <div className="row g-4">
          {featured.map((blog) => (
            <div className="col-12 col-md-6 col-lg-4" key={blog.id}>
              <Blogcard blog={blog} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="hero-pill">
            <i className="bi bi-tags-fill" />
            التصنيفات
          </span>

          <h2 className="fw-bold mt-3">استكشف حسب الموضوع</h2>

          <p className="text-white">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="row g-3 justify-content-center">
          {categories.map((category) => (
            <div className="col-6 col-md-4 col-lg-3" key={category.name}>
              <Link
                to={`/blogs?cat=${category.name}`}
                className="card card-dark text-decoration-none h-100"
              >
                <div className="card-body text-center py-4">
                  <div className="category-icon">
                    <i className="bi bi-folder-fill" />
                  </div>

                  <h6 className="fw-bold mb-1 text-white">{category.name}</h6>

                  <small className="text-white">{category.count} مقالات</small>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="section-header">
          <div>
            <span className="hero-pill">
              <i className="bi bi-clock-history" />
              الأحدث
            </span>

            <h2 className="fw-bold mt-2 mb-0">أحدث المقالات</h2>

            <p className="text-white">محتوى جديد طازج من المطبعة</p>
          </div>

          <Link to="/blogs" className="latest-link d-none d-md-inline">
            عرض جميع المقالات
            <i className="bi bi-arrow-left" />
          </Link>
        </div>

        <div className="row g-4">
          {latest.map((blog) => (
            <div className="col-12 col-md-6 col-lg-4" key={blog.id}>
              <Blogcard blog={blog} />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="card card-dark p-4 p-md-5 text-center">
          <div className="newsletter-icon">
            <i className="bi bi-envelope-fill" />
          </div>

          <h2 className="fw-bold">
            اشترك في <span className="accent">نشرتنا الإخبارية</span>
          </h2>

          <p className="text-white">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              className="form-control form-control-dark"
              placeholder="أدخل بريدك الإلكتروني"
            />

            <button className="btn btn-orange">اشترك الآن</button>
          </div>
        </div>
      </section>
    </div>
  );
}
