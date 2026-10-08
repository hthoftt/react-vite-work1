function Pagination({pagination,getProducts}) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${pagination.has_pre ? "" : "disabled"}`}>
          <a
            href="/"
            aria-label="Previous"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              getProducts(pagination.current_page - 1);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {[...new Array(pagination.total_pages)].map((_, i) => (
          <li
            className={`page-item ${i + 1 === pagination.current_page ? "active" : ""}`}
            key={`${i}_page`}
          >
            <a
              className="page-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                getProducts(i + 1);
              }}
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li className={`page-item ${pagination.has_next ? "" : "disabled"}`}>
          <a
            href="/"
            aria-label="Next"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              getProducts(pagination.current_page + 1);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
