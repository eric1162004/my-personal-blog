import React from 'react'
import Preloader from '../layout/Preloader'

const Pagination = ({currentPage, postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
            <div>
                { totalPosts ? (
                    <ul className="pagination center">
                        {pageNumbers.map(pageNumber => {
                            return (pageNumber === currentPage) ? 
                                (
                                    <li onClick={()=> paginate(pageNumber)} key={pageNumber} className='active z-depth-1'>
                                        <span  className='page-link'>{pageNumber}</span>
                                    </li>
                                ): (
                                    <li onClick={()=> paginate(pageNumber)} key={pageNumber} className=''>
                                        <span  className='page-link'>{pageNumber}</span>
                                    </li>
                                )
                        })}
                    </ul>
                ):(
                    <Preloader/>
                ) }
            </div>

    );
}

export default Pagination