export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">

      <i className="bi bi-search search-icon" />

      <input
        type="text"
        className="form-control form-control-dark"
        placeholder="ابحث في المقالات أو الوسوم..."
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button
          type="button"
          className="clear-button"
          onClick={() => onChange("")}
          title="مسح البحث"
        >
          <i className="bi bi-x-circle-fill" />
        </button>
      )}

    </div>
  );
}

