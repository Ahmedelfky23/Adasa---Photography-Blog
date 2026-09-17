import { Link } from 'react-router-dom';

export default function BlogListItem({ blog }) {
  if (!blog) return null;
  const linkTarget = `/blogs/${blog.id}`;

  return (
    <div className="card card-dark overflow-hidden p-3 transition-all">
      <div className="row g-3 align-items-center">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="rounded-3 overflow-hidden position-relative" style={{ height: 180 }}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-100 h-100 object-fit-cover"
              loading="lazy"
            />
            {blog.category && (
              <span className="badge-category position-absolute top-0 start-0 m-2">
                {blog.category}
              </span>
            )}
          </div>
        </div>

        <div className="col-12 col-md-8 col-lg-9">
          <div className="d-flex flex-column h-100 justify-content-between">
            <div>
              <div
                className="d-flex align-items-center gap-2 mb-2"
                style={{ color: 'var(--adasa-muted)', fontSize: '0.85rem' }}
              >
                <span>
                  <i className="bi bi-calendar3 ms-1" />
                  {blog.date}
                </span>
                <span>•</span>
                <span>
                  <i className="bi bi-clock ms-1" />
                  {blog.readTime}
                </span>
              </div>

              <h4 className="fw-bold mb-2">
                <Link
                  to={linkTarget}
                  className="text-white text-decoration-none title-link"
                >
                  {blog.title}
                </Link>
              </h4>

              <p
                className="mb-3"
                style={{
                  color: 'var(--adasa-muted)',
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                }}
              >
                {blog.excerpt}
              </p>
            </div>

            <div
              className="d-flex align-items-center justify-content-between pt-2 border-top"
              style={{ borderColor: 'var(--adasa-border)' }}
            >
              <div className="d-flex align-items-center gap-2">
                {blog.author?.avatar && (
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="rounded-circle object-fit-cover"
                    style={{ width: 32, height: 32 }}
                  />
                )}
                <div>
                  <span className="d-block fw-semibold text-white small">
                    {blog.author?.name}
                  </span>
                  <small style={{ color: 'var(--adasa-muted)', fontSize: '0.72rem' }}>
                    {blog.author?.role}
                  </small>
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
      </div>
    </div>
  );
}
