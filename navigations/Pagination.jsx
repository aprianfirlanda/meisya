import PropTypes from 'prop-types';

function Pagination({ totalData, length, setLength, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalData / length);

  const handleLengthChange = (e) => {
    setLength(Number(e.target.value));
    setCurrentPage(1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pages = () => {
    if (currentPage === 1) {
      return totalPages < 3 ? Array.from({ length: totalPages }, (_, i) => i + 1) : [1, 2, 3];
    } else if (currentPage === totalPages && totalPages === 2) {
      return [0, 1];
    } else if (currentPage === totalPages) {
      return [-1, 0, 1];
    } else {
      return [0, 1, 2];
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-5">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <span className="text-xs">Show</span>
          <select
            className="select select-bordered select-xs w-full max-w-xs"
            value={length}
            onChange={handleLengthChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={-1}>All</option>
          </select>
          <span className="text-xs">entries</span>
        </div>
        <span className="text-xs">{`From ${totalData} total data`}</span>
      </div>

      <div className="join mt-2">
        {![1, 2].includes(currentPage) && (
          <>
            <input
              className="join-item btn btn-sm btn-square"
              type="radio"
              name="page"
              aria-label="1"
              onChange={() => goToPage(1)}
            />

            {currentPage !== 3 && <button className="join-item btn btn-sm btn-disabled">...</button>}
          </>
        )}

        {pages().map((index) => (
          <input
            key={index}
            className="join-item btn btn-sm btn-square"
            type="radio"
            name="page"
            aria-label={`${currentPage - 1 + index}`}
            checked={currentPage === currentPage - 1 + index}
            onChange={() => goToPage(currentPage - 1 + index)}
          />
        ))}

        {length !== -1 && ![totalPages, totalPages - 1].includes(currentPage) && (
          <>
            {currentPage !== totalPages - 2 && <button className="join-item btn btn-sm btn-disabled">...</button>}

            <input
              className="join-item btn btn-sm btn-square"
              type="radio"
              name="page"
              aria-label={`${totalPages}`}
              onChange={() => goToPage(totalPages)}
            />
          </>
        )}

        {length === -1 && (
          <input
            className="join-item btn btn-sm btn-square"
            type="radio"
            name="page"
            aria-label={`${currentPage}`}
            onChange={() => goToPage(currentPage)}
          />
        )}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  totalData: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
