export default function ViewToggle({ view, onChange }) {
  return (
    <div className="btn-group" role="group" aria-label="تبديل طريقة العرض">
      <button
        type="button"
        className={`btn btn-sm ${
          view === 'grid' ? 'btn-orange' : 'btn-outline-soft'
        }`}
        onClick={() => onChange('grid')}
        title="عرض شبكي"
      >
        <i className="bi bi-grid-fill" />
      </button>
      <button
        type="button"
        className={`btn btn-sm ${
          view === 'list' ? 'btn-orange' : 'btn-outline-soft'
        }`}
        onClick={() => onChange('list')}
        title="عرض القائمة"
      >
        <i className="bi bi-view-list" />
      </button>
    </div>
  );
}
