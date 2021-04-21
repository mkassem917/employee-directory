import React from "react";
import Table from "react-bootstrap/Table";
import "./MainPage.css";

function MyMainPage(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number <button className='filter' onClick={props.sortNumber}><i className="fas fa-filter"></i></button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Moe</td>
          <td>Kassem</td>
          <td>@test</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tester</td>
          <td>Test</td>
          <td>@fat</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Moe</td>
          <td>Kassem</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyMainPage;
