import React from 'react';

const Table = (record) => {
    // console.log(record);
    

    for (let country of Object.keys(record)) {
        var recordData = record[country];
        // console.log( recordData);
    }
    
    for (const [recordData] of Object.entries(record))
    {
        console.log(typeof recordData);
    }

   

        
    

    return (
        <div>
        <div>
        

        </div>
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Company</th>
                            <th scope="col">job</th>
                            <th scope="col">city</th>
                            <th scope="col">phone</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{recordData.id}</th>
                            <td>{recordData.name}</td>
                            <td>{recordData.email}</td>
                            <td>{recordData.company}</td>
                            <td>{recordData.job}</td>
                            <td>{recordData.city}</td>
                            <td>{recordData.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;