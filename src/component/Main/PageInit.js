import React from 'react';

const PageInit = ({ recordsPerPage, totalrecords, paginate }) => {
    console.log(recordsPerPage);
    console.log(totalrecords);
    console.log(paginate);
    return (
        <div>
            <h1>Bismillah PageInit</h1>
        </div>
    );
};

export default PageInit;