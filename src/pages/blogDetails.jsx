import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "../services/blogservice";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    getBlogById(id)
      .then((res) => setBlog(res || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center my-5">
        <div
          className="spinner-border"
          style={{ color: "var(--adasa-orange)" }}
          role="status"
        >
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-5" style={{ maxWidth: 880 }}>
      <Link to="/blogs" className="btn btn-outline-soft btn-sm mb-4">
        <i className="bi bi-arrow-right ms-1" /> العودة للمدونة
      </Link>

      <div className="mb-4">
        {blog.category && (
          <span className="badge-category mb-2 d-inline-block">
            {blog.category}
          </span>
        )}
        <h1
          className="hero-title text-start mb-3"
          style={{ fontSize: "2.3rem" }}
        >
          {blog.title}
        </h1>

        <div
          className="d-flex align-items-center gap-3 py-3 border-top border-bottom"
          style={{ borderColor: "var(--adasa-border)" }}
        >
          {blog.author?.avatar && (
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="rounded-circle object-fit-cover"
              style={{ width: 48, height: 48 }}
            />
          )}
          <div>
            <h6 className="mb-0 text-white fw-bold">{blog.author?.name}</h6>
            <small style={{ color: "var(--adasa-muted)" }}>
              {blog.author?.role && `${blog.author.role} • `}
              {blog.date} • {blog.readTime}
            </small>
          </div>
        </div>
      </div>

      {blog.image && (
        <div className="mb-5 rounded-4 overflow-hidden shadow">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-100 object-fit-cover"
            style={{ maxHeight: 460 }}
          />
        </div>
      )}

      {blog.excerpt && (
        <div
          className="lead p-3 rounded-3 mb-4"
          style={{
            background: "var(--adasa-orange-soft)",
            borderRight: "4px solid var(--adasa-orange)",
            color: "var(--adasa-text)",
            lineHeight: 1.8,
          }}
        >
          {blog.excerpt}
        </div>
      )}

      <div
        className="blog-content text-white lh-lg"
        style={{
          whiteSpace: "pre-line",
          fontSize: "1.1rem",
          lineHeight: 2,
        }}
      >
        {blog.content}
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div
          className="d-flex flex-wrap gap-2 mt-5 pt-4 border-top"
          style={{ borderColor: "var(--adasa-border)" }}
        >
          <span style={{ color: "var(--adasa-muted)" }}>الوسوم:</span>
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="badge"
              style={{
                background: "var(--adasa-card)",
                border: "1px solid var(--adasa-border)",
                color: "var(--adasa-muted)",
                padding: "6px 12px",
                fontSize: "0.85rem",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
