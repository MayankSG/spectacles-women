import React, { useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import "./FilterSection.css";
export const FilterSection = ({ selectedFilters, setSelectedFilters }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [colors, setColors] = useState([
    "black",
    "tortoise",
    "coloured",
    "crystal",
    "dark",
    "bright",
  ]);
  const [shapes, setShapes] = useState([
    "square",
    "rectangle",
    "round",
    "cat-eye",
  ]);
  const [isShapeVisible, setIsShapeVisible] = useState(false);
  const onSelectFliter = (filter) => {
    let index = selectedFilters.findIndex((ele) => ele.name == filter.name);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      let selectedFilterCopy = [...selectedFilters];
      selectedFilterCopy.splice(index, 1);
      setSelectedFilters(selectedFilterCopy);
    }
  };

  const checkIsSelected = (name) => {
    let index = selectedFilters.findIndex((ele) => ele.name == name);
    return index == -1 ? false : true;
  };
  return (
    <>
      <Row style={{ minHeight: "50px" }} className="gx-0">
        <Col className="col-style" lg={4} md={12}>
          <p className="para">AVAILABLE TO TRY AT HOME</p>
        </Col>
        <Col
          onClick={() => {
            setIsVisible(!isVisible);
            setIsShapeVisible(false);
          }}
          className="col-style"
          lg={2}
          md={6}
          sm={6}
          xs={6}
        >
          <p className="para">COLOUR</p>
        </Col>
        <Col
          onClick={() => {
            setIsShapeVisible(!isShapeVisible);
            setIsVisible(false);
          }}
          className="col-style"
          lg={2}
          md={6}
          sm={6}
          xs={6}
        >
          <p className="para">SHAPE</p>
        </Col>
        <Col className="col-style" xs={6} sm={6} lg={2} md={6}>
          <p className="para">FIT</p>
        </Col>
        <Col className="col-style" xs={6} sm={6} lg={2} md={6}>
          <p className="para">MATERIAL</p>
        </Col>
      </Row>

      <Collapse style={{ height:"auto" }} in={isVisible}>
        <Row style={{ minHeight: "50px" }} className="gx-0">
          {colors.map((color, idx) => {
            return (
              <Col
                onClick={() => onSelectFliter({ name: color, type: "color" })}
                className={`col-style-sub-menu ${
                  checkIsSelected(color) ? "seleccted" : ""
                }`}
                md={2}
                sm={6}
                xs={6}
              >
                <p
                  className={`para ${checkIsSelected(color) ? "selected" : ""}`}
                  key={idx}
                  style={{ margin: "12px 0px" }}
                >
                  {color}
                </p>
              </Col>
            );
          })}
        </Row>
      </Collapse>
      <Collapse style={{ height:"auto" }} in={isShapeVisible}>
        <Row style={{ minHeight: "50px" }} className="gx-0">
          {shapes.map((shape, idx) => {
            return (
              <Col
                onClick={() => onSelectFliter({ name: shape, type: "shape" })}
                key={idx}
                className="col-style-sub-menu"
                md={3}
                sm={6}
                xs={6}
              >
                <p
                  className={`para ${checkIsSelected(shape) ? "selected" : ""}`}
                  style={{ margin: "12px 0px", textTransform: "uppercase" }}
                >
                  {shape}
                </p>
              </Col>
            );
          })}
        </Row>
      </Collapse>
    </>
  );
};
