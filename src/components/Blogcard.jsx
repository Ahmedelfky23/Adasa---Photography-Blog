import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  if (!blog) return null;
  const linkTarget = `/blogs/${blog.id}`;

  return (
    <div className="card card-dark blog-card h-100 border-0 overflow-hidden shadow-sm d-flex flex-column">
      <div
        className="position-relative overflow-hidden"
        style={{ height: 210 }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-100 h-100 object-fit-cover blog-card-img"
          loading="lazy"
        />
        {blog.category && (
          <span className="badge-category position-absolute top-0 start-0 m-3">
            {blog.category}
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column p-4 flex-grow-1">
        <div
          className="d-flex align-items-center gap-2 mb-2"
          style={{ color: "var(--adasa-muted)", fontSize: "0.85rem" }}
        >
          <span>
            <i className="bi bi-calendar3 ms-1 px-2" />
            {blog.date}
          </span>
          <span>•</span>
          <span>
            <i className="bi bi-clock ms-1 px-2" />
            {blog.readTime}
          </span>
        </div>

        <h5 className="card-title fw-bold text-white mb-2">
          <Link
            to={linkTarget}
            className="text-white text-decoration-none title-link"
          >
            {blog.title}
          </Link>
        </h5>

        <p
          className="card-text flex-grow-1 mb-3"
          style={{
            color: "var(--adasa-muted)",
            fontSize: "0.92rem",
            lineHeight: "1.7",
          }}
        >
          {blog.excerpt}
        </p>

        <div
          className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto"
          style={{ borderColor: "var(--adasa-border)" }}
        >
          <div className="d-flex align-items-center gap-2">
            {blog.author?.avatar && (
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="rounded-circle object-fit-cover"
                width={34}
                height={34}
              />
            )}
            <div className="lh-1 text-start">
              <span className="d-block fw-semibold text-white small">
                {blog.author?.name}
              </span>
              <p
                className="m-0 small mb-1"
                style={{ color: "var(--adasa-muted)" }}
              >
                {blog.author?.role}
              </p>
            </div>
          </div>

          <Link
            to={linkTarget}
            className="btn-read-more text-decoration-none fw-semibold small"
          >
            اقرأ المزيد <i className="bi bi-arrow-left" />
          </Link>
        </div>
      </div>
    </div>
  );
}
