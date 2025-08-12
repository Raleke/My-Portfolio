import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeName from "../../Assets/home-name.JPG";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">    
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NNAJIOFOR RALUEKE MIRACLE</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="myAvtar" style={{ paddingBottom: 20, display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "50px" }}>
              <img
                src={homeName}
                alt="profile"
                className="img-fluid"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  border: "2px solid #c770f0",
                  objectFit: "cover"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
