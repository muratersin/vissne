import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleClick = (page, currentPage) => {
  let result = 1;

  if (Number.isInteger(page)) {
    return { page };
  }

  if (page === 'prev') {
    const newPage = (currentPage - 1);
    result = newPage === 0 ? 1 : newPage;
  } else if (page === 'next') {
    result = (currentPage + 1);
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
  const totalPage = Math.floor(total / limit); // floor down
  const bc = Math.ceil(buttonCount / 2);

  for (let i = (page - (bc - 1)); i < (page + bc); i += 1) {
    if (i > 0 && i <= totalPage) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers;
};


const Pagination = ({ options }) => {
  const { page, onPaginate } = options;

  const pageNumbers = generatePageNumbers(options);

  if (pageNumbers.length < 2) {
    return <span />;
  }

  const pageButtons = pageNumbers.map(pn => (
    <li className={`page-item  ${pn === page ? 'active' : ''}`}>
      <a
        className="page-link"
        onClick={() => onPaginate(handleClick(pn))}
      >
        {pn}
      </a>
    </li>
  ));

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onPaginate(handleClick('prev', page))}
          >
            <FontAwesomeIcon icon="angle-left" />
          </a>
        </li>
        {pageButtons}
        <li className="page-item">
          <a
            className="page-link"
            handleClick={() => onPaginate(handleClick('next', page))}
          >
            <FontAwesomeIcon icon="angle-right" />
          </a>
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
