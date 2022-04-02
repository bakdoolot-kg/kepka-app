import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./pagination.css"
import {IconButton} from "@mui/material";
import vector from "../catalog/catalog-img/Vector.svg";

const PaginationComponent = ({capsPerPage, totalCaps, paginate, setCurrentPage}) => {
  const pageNumbers = []
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  for (let i = 1; i <= Math.ceil(totalCaps / capsPerPage); i++) {
    pageNumbers.push(i)
  }
  const page = parseInt(query.get('page') || '1', pageNumbers.length + 1);
  {/* <Pagination
        page={page}
        count={total}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/catalog${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      /> */}
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)


  return (
    <div className='pagination-container'>
      <IconButton size='large' onClick={prevPage}><img src={vector} alt="arrow"/></IconButton>

      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li className='page-item' key={number}>
            <Link className={number === page ? 'page-link active' : 'page-link'} to={`/catalog${number === 1 ? '' : `?page=${number}`}`} onClick={() => paginate(number)}>{number}</Link>
          </li>
        ))}
      </ul>

        <IconButton size='large' onClick={nextPage}><img src={vector} alt="arrow"/></IconButton>
    </div>
    )
}

export default PaginationComponent