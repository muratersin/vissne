import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleClick = (page, currentPage, totalPage) => {
  let result = 1;

  if (Number.isInteger(page)) {
    return { page };
  }

  if (page === 'prev') {
    const newPage = (currentPage - 1);
    result = newPage === 0 ? 1 : newPage;
  } else if (page === 'next') {
    result = ((currentPage + 1) > totalPage)
      ? totalPage
      : (currentPage + 1);
  }

  return { page: result };
};

const generatePageNumbers = (options) => {
  const {
    page,
    limit,
    total,
    buttonCount,
  } = options;
  const pageNumbers = [];
  const totalPage = Math.floor(total / limit);
  const bc = Math.ceil(buttonCount / 2);

  for (let i = (page - (bc - 1)); i < (page + bc); i += 1) {
    if (i > 0 && i <= totalPage) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers;
};


const Pagination = ({ options }) => {
  const { page, onPaginate, limit, total } = options;

  const pageNumbers = generatePageNumbers(options);
  const totalPage = Math.floor(total / limit);

  if (pageNumbers.length < 2) {
    return <span />;
  }

  const pageButtons = pageNumbers.map(pn => (
    <li className={`page-item  ${pn === page ? 'active' : ''}`}>
      <button
        className="page-link rounded-0"
        type="button"
        onClick={() => (pn !== page ? onPaginate(handleClick(pn)) : '')}
      >
        {pn}
      </button>
    </li>
  ));

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link rounded-0"
            type="button"
            onClick={() => onPaginate(handleClick('prev', page))}
            disabled={page === 1}
          >
            <FontAwesomeIcon icon="angle-left" />
          </button>
        </li>
        {pageButtons}
        <li className={`page-item ${page === totalPage ? 'disabled' : ''}`}>
          <button
            className="page-link rounded-0"
            type="button"
            onClick={() => onPaginate(handleClick('next', page))}
          >
            <FontAwesomeIcon icon="angle-right" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  options: {
    buttonCount: 3,
    total: 0,
    page: 1,
    limit: 10,
  },
};

Pagination.propTypes = {
  options: PropTypes.shape({
    total: PropTypes.number,
    limit: PropTypes.number,
    page: PropTypes.number,
    onPaginate: PropTypes.func,
    buttonCount: PropTypes.number,
  }),
};

export default Pagination;
