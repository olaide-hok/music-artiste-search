import React from 'react';

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} href='' className='page-link text-dark'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;