export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination gap-1">

        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </li>

        {pages.map((page) => (
          <li className="page-item" key={page}>
            <button
              className={`page-link ${
                page === currentPage ? "active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="bi bi-chevron-left" />
          </button>
        </li>

      </ul>
    </nav>
  );
}

