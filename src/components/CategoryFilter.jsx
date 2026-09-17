export default function CategoryFilter({
  categories = [],
  value = "All",
  onChange,
}) {
  return (
    <div className="category-filter">
      <button
        className={value === "All" ? "active" : ""}
        onClick={() => onChange("All")}
      >
        جميع المقالات
      </button>

      {categories.map((cat) => (
        <button
          key={cat.name}
          className={value === cat.name ? "active" : ""}
          onClick={() => onChange(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
