import React from 'react';

const PageInit = ({ recordsPerPage, totalrecords, paginate }) => {
    console.log(recordsPerPage);
    console.log(totalrecords);
    console.log(paginate);

    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalrecords / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
        <div >
            <h1> Pages</h1>
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map((number) => (
                            <li key={number} className="page-item">
                                <a
                                    onClick={() => paginate(number)}
                                    href="!#"
                                    className="page-link"
                                >
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
        </div>
    );
};

export default PageInit;