import React from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";

export const Sidebar = ({ show, handleClose, selectedMenu, setCollectionType }) => {
  const onClickItem = (gender)=>{
    setCollectionType(`${selectedMenu}-${gender}`)
    handleClose()
    let ele = document.getElementById("close-btn");
    if(ele){
      ele.click()
    }
  }
  return (
    <>
      <Offcanvas
        backdrop={false}
        style={{ marginTop: "56px", width: "250px" }}
        show={show}
      >
        <Offcanvas.Body style={{ padding: 0 }}>
          <Row className="gx-0 gy-0" >
            <Col
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                paddingLeft: "10px",
                borderRight: "1px solid",
                borderTop: "1px solid",
                borderLeft: "none",
                borderBottom: "none",
                height: "50px",
                paddingTop:"10px"
              }}
              onClick={handleClose}
            >
              {"< Back"}
            </Col>
          </Row>
          <Row
            style={{ height: "50px", borderTop: "1px solid" }}
            className="gx-0"
          >
            {["women", "men"].map((gender, idx) => {
              return (
                <Col onClick={()=>onClickItem(gender)} key={idx} sm={12} className="col-sub-menu">
                  <p
                    style={{
                      margin: "12px 0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {gender}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
