// import { useState } from 'react'

const Dashboard = ({info,handleaddInfo}) => {

   
        return (
          
        <div>
          <button onClick={handleaddInfo}>Add Data</button>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
              </tr>
            </thead>

            <tbody>
              {info.map(
                (item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.bookName}</td>
                  <td>{item.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default Dashboard;
