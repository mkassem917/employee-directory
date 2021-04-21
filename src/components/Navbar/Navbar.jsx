import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Navbar.css";

function MyNavbar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Form className="inline" onSubmit={props.handleFormSubmit}>
          <input
            className="form-control"
            value={props.value}
            name="search"
            onChange={props.handleInputChange}
            type="search"
            placeholder="Employee Search"
          />
        </Form>
      </Navbar>
    </>
  );
}

export default MyNavbar;
