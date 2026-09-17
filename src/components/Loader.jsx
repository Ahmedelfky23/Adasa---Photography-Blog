export default function Loader() {
  return (
    <div className="container py-5 text-center my-5">
      <div
        className="spinner-border"
        style={{
          width: '3rem',
          height: '3rem',
          color: 'var(--adasa-orange)',
        }}
        role="status"
      >
        <span className="visually-hidden">جاري التحميل...</span>
      </div>
      <p className="mt-3" style={{ color: 'var(--adasa-muted)' }}>
        جاري تحميل المقالات...
      </p>
    </div>
  );
}
