import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import PageInit from './PageInit';
import Records from './Records';
const MainPage = () => {
    const [mockData, setMockData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    useEffect(() => {
        setLoading(true);

        fetch("https://classmarker-app.herokuapp.com/mockData")
        .then((response) => response.json())
        .then((data) => setMockData(data));

        setLoading(false);
    }, []);

    // Get current records
    const indexOfLastPost = currentPage * recordsPerPage;
    const indexOfFirstPost = indexOfLastPost - recordsPerPage;
    const currentrecords = mockData.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Total Records are {mockData.length}  </h1>
                <div className = "container mt-5">
                    {/* <h1 className="text-primary mb-3">Our table</h1> */}
                </div>

            <Records records={currentrecords} loading={loading}> </Records>
                <PageInit
                    recordsPerPage={recordsPerPage}
                    totalrecords={mockData.length}
                    paginate={paginate}
                ></PageInit>
        </div>
    );
};

export default MainPage;