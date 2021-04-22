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
          onClick={() => props.sortBy("image")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> onClick={() => props.sortBy("name", "firstName")}</td>
          <td>Moe</td>
          <td>Kassem</td>
          <td>855-1212</td>
        </tr>
        <tr>
          <td> onClick={() => props.sortBy("name", "lastName")}</td>
          <td>Tester</td>
          <td>Test</td>
          <td>855-1313</td>
        </tr>
        <tr>
        <td> onClick={() => props.sortBy("phoneNumber")}</td>
          <td>Moe</td>
          <td>Kassem</td>
          <td>855-1414</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyMainPage;
