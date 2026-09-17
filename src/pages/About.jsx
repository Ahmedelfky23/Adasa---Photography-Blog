import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/blogservice";

export default function About() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getBlogs().then((posts) => {
      const map = new Map();
      posts.forEach((post) => {
        if (post.author && !map.has(post.author.name)) {
          map.set(post.author.name, {
            ...post.author,
            articlesCount: posts.filter(
              (p) => p.author?.name === post.author.name
            ).length,
          });
        }
      });
      setAuthors(Array.from(map.values()));
    });
  }, []);

  const values = [
    {
      icon: "bi-camera-fill",
      title: "الجودة أولاً",
      desc: "محتوى تعليمي وتطبيقي دقيق مبني على تجارب عملية حقيقية في الميدان.",
    },
    {
      icon: "bi-lightning-charge-fill",
      title: "بروح مهنية",
      desc: "أمانة فكرية ومعايير احترافية تفيد المبتدئ والمحترف على حد سواء.",
    },
    {
      icon: "bi-people-fill",
      title: "مجتمعنا",
      desc: "نفخر ببناء بيئة تفاعلية تدعم المصورين وتتبادل الخبرات باستمرار.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "شغف مستمر",
      desc: "نواكب أحدث التقنيات والعدسات والأساليب الفنية لنلهمكم بكل جديد.",
    },
  ];

  return (
    <div className="bg-grid">
      <section className="container text-center py-5">
        <div className="py-4">
          <span className="hero-pill mb-3">
            <i className="bi bi-camera me-1" />
            عن عدسة
          </span>

          <h1 className="hero-title">
            مهمتنا هي <span className="accent">الإعلام والإلهام</span>
          </h1>

          <p className="hero-description" style={{ maxWidth: 720 }}>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين من كافة المستويات على تقديم محتوى بصري مبدع.
          </p>

          <div className="row g-3 justify-content-center mt-4">
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <i className="bi bi-people-fill" />
                <div className="num">+2 مليون</div>
                <div className="lbl">قارئ شهرياً</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <i className="bi bi-journal-richtext" />
                <div className="num">+500</div>
                <div className="lbl">مقالة منشورة</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <i className="bi bi-pencil-square" />
                <div className="num">+50</div>
                <div className="lbl">كاتب خبير</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <i className="bi bi-trophy-fill" />
                <div className="num">+15</div>
                <div className="lbl">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">
            <span style={{ color: "var(--adasa-orange)" }}>|</span> قيمنا{" "}
            <span style={{ color: "var(--adasa-orange)" }}>|</span>
          </h2>
          <p className="text-white">المبادئ التي توجه كل ما نفعله ونشاركه</p>
        </div>

        <div className="row g-4">
          {values.map((v, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx}>
              <div className="card card-dark p-4 text-center h-100">
                <div
                  className="category-icon mx-auto mb-3"
                  style={{
                    width: 55,
                    height: 55,
                    fontSize: "1.35rem",
                    borderRadius: "14px",
                  }}
                >
                  <i className={`bi ${v.icon}`} />
                </div>
                <h5 className="fw-bold mb-2 text-white">{v.title}</h5>
                <p
                  className="mb-0 text-white"
                  style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="hero-pill mb-2">
            <i className="bi bi-people-fill" />
            فريقنا
          </span>
          <h2 className="fw-bold mt-2 mb-2">تعرف على كتابنا</h2>
          <p className="text-white">
            نخبة من المصورين والكتاب ذوي الخبرة يشاركون شغفهم ومعرفتهم
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {authors.map((author, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={author.name || index}
            >
              <div className="card card-dark p-4 text-center h-100 d-flex flex-column align-items-center">
                <div className="position-relative d-inline-block mb-3">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="rounded-circle"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      border: "2px solid rgba(255, 94, 20, 0.35)",
                    }}
                    loading="lazy"
                  />
                  <span
                    className="position-absolute bottom-0 end-0 badge rounded-pill d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "var(--adasa-orange)",
                      width: 24,
                      height: 24,
                      border: "2px solid var(--adasa-card)",
                      padding: 0,
                    }}
                  >
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: "0.65rem", color: "#fff" }}
                    />
                  </span>
                </div>

                <h5 className="fw-bold text-white mb-1">{author.name}</h5>
                <span
                  style={{
                    color: "var(--adasa-orange)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {author.role}
                </span>

                <small
                  className="text-white mt-2 d-block"
                  style={{ fontSize: "0.8rem" }}
                >
                  {author.articlesCount}{" "}
                  {author.articlesCount > 2 ? "مقالات" : "مقالة"}
                </small>

                <div
                  className="d-flex justify-content-center gap-2 mt-auto pt-3 border-top w-100"
                  style={{ borderColor: "var(--adasa-border)" }}
                >
                  <Link
                    to={`/blogs?author=${encodeURIComponent(author.name)}`}
                    className="btn btn-outline-soft btn-sm px-2 py-1"
                    title="عرض المقالات"
                  >
                    <i className="bi bi-file-earmark-text" />
                  </Link>
                  <a
                    href="#"
                    className="btn btn-outline-soft btn-sm px-2 py-1"
                    onClick={(e) => e.preventDefault()}
                    title="تويتر"
                  >
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-soft btn-sm px-2 py-1"
                    onClick={(e) => e.preventDefault()}
                    title="لينكد إن"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div
          className="rounded-4 p-4 p-md-5 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #ff5e14 0%, #ff7a3d 100%)",
            boxShadow: "0 15px 35px rgba(255, 94, 20, 0.25)",
          }}
        >
          <h2 className="fw-bold mb-3 fs-1 text-white">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p
            className="mx-auto mb-4 text-white"
            style={{ maxWidth: 620, fontSize: "1.05rem", opacity: 0.95 }}
          >
            نحن هنا لمساعدتك والإجابة على أي استفسار حول التصوير الفوتوغرافي
            ومعداته وتقنياته، نسعد دائماً بتواصلك معنا.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="mailto:hello@adasah.com"
              className="btn btn-dark btn-lg px-4 d-inline-flex align-items-center gap-2"
              style={{ borderRadius: 12, fontWeight: 700 }}
            >
              <i className="bi bi-envelope-fill" />
              تواصل معنا
            </a>
            <Link
              to="/blogs"
              className="btn btn-outline-light btn-lg px-4 d-inline-flex align-items-center gap-2"
              style={{ borderRadius: 12, fontWeight: 700 }}
            >
              تصفح المقالات
              <i className="bi bi-arrow-left" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
