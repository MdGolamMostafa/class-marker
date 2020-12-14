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
            <h1>Bismillah Records</h1>
            
            <ul className="list-group mb-4">
                {records.map((record) => (
                    <Table 
                        key={record.id}
                        record = {record}
                    ></Table>
                ))}
      </ul>
        </div>
    );
};

export default Records;
 {/* <li key={post.id} className="list-group-item">
                        {post.id}
                    </li> */}