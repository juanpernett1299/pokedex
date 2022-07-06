import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ setOffset, offset, limit, count }) => {
  let pages = Math.ceil(count / limit);
  let [page, setPage] = useState(1);

  const toPrev = (e) => {
    let newOff = offset - limit;
    if (page > 1) {
      setPage(page - 1);
      setOffset(newOff);
    }
    console.log(newOff + "  " + page);
  };

  const toNext = (e) => {
    let newOff = offset + limit;
    if (page <= pages) {
      setPage(page + 1);
      setOffset(newOff);
    }
    console.log(newOff + "  " + page);
  };

  return (
    <div className="pages-container">
      <button type="button" className="btnpag" onClick={toPrev}>
        <span role="img" aria-label="prev arrow">
          ⬅️
        </span>
      </button>
      <h4 className="numpage">
        {page} de {pages}
      </h4>
      <button type="button" className="btnpag" onClick={toNext}>
        <span role="img" aria-label="next arrow">
          ➡️
        </span>
      </button>
    </div>
  );
};

export default Pagination;
