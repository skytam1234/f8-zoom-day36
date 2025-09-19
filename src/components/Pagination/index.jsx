import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage === totalPages && endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <nav className={styles.pagination}>
            <ul>
                <li>
                    <button
                        className="button"
                        onClick={() => handlePageClick(1)}
                        disabled={currentPage === 1}
                    >
                        First
                    </button>
                </li>
                <li>
                    <button
                        className="button"
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            className={`${styles.pageButton} ${
                                number === currentPage ? styles.active : ""
                            }`}
                            onClick={() => handlePageClick(number)}
                            disabled={number === currentPage}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="button"
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
                <li>
                    <button
                        className="button"
                        onClick={() => handlePageClick(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Last
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
