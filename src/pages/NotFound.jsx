import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center my-auto">
      <div className="py-5">
        <div className="mb-4">
          <i
            className="bi bi-exclamation-triangle-fill display-1"
            style={{ color: "var(--adasa-orange)" }}
          />
        </div>
        <h1 className="hero-title mb-2">404</h1>
        <h2 className="mb-3 text-white">الصفحة غير موجودة</h2>
        <p
          className="mb-4 mx-auto"
          style={{ maxWidth: 480, color: "var(--adasa-muted)" }}
        >
          عذراً، الصفحة التي تحاول الوصول إليها غير متوفرة أو ربما تم تغيير
          مسارها.
        </p>
        <Link to="/" className="btn btn-orange px-4 py-2">
          العودة للصفحة الرئيسية <i className="bi bi-house-door ms-1" />
        </Link>
      </div>
    </div>
  );
}
