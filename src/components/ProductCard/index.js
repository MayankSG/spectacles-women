import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

export const ProductCard = ({name, image, image2}) => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  return (
    <Col
      style={{ padding: 0, cursor: "pointer" }}
      md={6}
      sm={12}
      xs={12}
      lg={4}
      onMouseEnter={()=>{
        setShowFirstImage(false)
      }}
      onMouseLeave={()=>{
        setShowFirstImage(true)
      }}
    >
      <Card
        style={{
          borderRadius: 0,
          border: "1px solid black",
          borderTop: "none",
          borderLeft: "none",
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "22px",
            top: "10px",
            textTransform:"uppercase"
          }}
        >
          {name}
        </p>
        <Card.Img
          variant="top"
          src={showFirstImage ? image : image2}
        />
      </Card>
    </Col>
  );
};
