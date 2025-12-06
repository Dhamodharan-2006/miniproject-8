import React from "react";
import products from "./products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";

function Home() {
  return (
    <div className="p-2 p-sm-3 p-md-4">
      <h1 className="text-center mt-2">Latest products </h1>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
