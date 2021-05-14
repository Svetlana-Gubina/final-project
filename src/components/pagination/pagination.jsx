import React from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({isLastPage, pageNumber, goToNextPage, goToPrevPage}) => {
  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={goToPrevPage} disabled={pageNumber === 1 ? true : false}>Prev</button>
      <button className="pagination__btn" onClick={goToNextPage} disabled={isLastPage}>Next</button>
    </div>
  );
};

Pagination.propTypes = {
  isLastPage: PropTypes.bool,
  pageNumber: PropTypes.number,
  goToNextPage: PropTypes.func,
  goToPrevPage: PropTypes.func,
};

export default Pagination;
