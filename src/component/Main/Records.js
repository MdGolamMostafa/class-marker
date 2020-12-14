import React from 'react';
import Table from './Table';

const Records = ({ records, loading }) => {
    // console.log(records);
    // console.log(loading);
    if (loading) {
            return <h2>Loading...</h2>;
        }
    return (
        <div>
            <h1> Record table</h1>
            
            <ul className="list-group mb-4">
                {records.map((record) => (
                    <Table
                        key={record.id}
                        record = {record}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Records;
