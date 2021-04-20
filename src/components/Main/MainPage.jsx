import React from "react";
import Table from "react-bootstrap/Table";
import "./MainPage.css";

function MyMainPage() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
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
