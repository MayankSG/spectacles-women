import React, { useState } from "react";
import { Offcanvas, Navbar, Container, Col, Row } from "react-bootstrap";
import { Sidebar } from "../Sidebar";
import logoImg from "../../assets/images/logo.png"
import "./Header.css";

export const Header = ({ setCollectionType }) => {
  const [show, setShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (menu) => {
    setSelectedMenu(menu);
    setShow(true);
  };
  return (
    <>
      <Navbar bg="white" expand={false}>
        <Container fluid>
          <Row className="w-100 gx-0 gy-0" style={{height:"40px"}} >
            <Col style={{alignItems:"self-start", display:"flex"}}  xs={4} sm={4} md={4} >
              <Navbar.Toggle
                onClick={() => setShow(false)}
                style={{
                  backgroundColor: "none",
                  textDecoration: "none",
                  border: "none",
                }}
                id="close-btn"
                aria-controls="offcanvasNavbar"
              />
            </Col>
            <Col  xs={4} sm={4} md={4}>
              <Navbar.Brand href="#">
                <img height="40px" src={logoImg} alt="logo"/>
              </Navbar.Brand>
            </Col>
            <Col xs={4} sm={4} md={4}>
            </Col>
          </Row>
          <Navbar.Offcanvas
            style={{ marginTop: "56px", width: "250px" }}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            backdrop={false}
          >
            <Offcanvas.Body style={{ padding: 0, borderTop: "1px solid" }}>
              <Row style={{ height: "50px" }} className="gx-0">
                {[
                  { name: "spectacles", hasSubMenu: true },
                  { name: "sunglasses", hasSubMenu: true },
                  { name: "home try on", hasSubMenu: false },
                  { name: "pair to pair", hasSubMenu: false },
                ].map((shape, idx) => {
                  return (
                    <Col
                      onClick={() =>
                        shape.hasSubMenu ? handleShow(shape.name) : null
                      }
                      key={idx}
                      sm={12}
                      className="col-sub-menu"
                    >
                      <p
                        style={{
                          margin: "12px 0px",
                          textTransform: "uppercase",
                        }}
                      >
                        {shape.name}
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Sidebar
        selectedMenu={selectedMenu}
        setCollectionType={setCollectionType}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

{
  /* <button
onClick={handleShow}
class="btn btn-primary"
type="button"
data-bs-toggle="offcanvas"
data-bs-target="#offcanvasExample"
aria-controls="offcanvasExample"
>
Button with data-bs-target
</button> */
}
