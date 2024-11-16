import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="pagination-container">
      <div className="pagination">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="pagination-button"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="pagination-button"
          >
            Next
          </button>
        )}
        <p className="page-info">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
