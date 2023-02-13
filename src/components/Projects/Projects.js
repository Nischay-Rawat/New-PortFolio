import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mgf from "../../Assets/Projects/mgf.png";
import GasOLine from "../../Assets/Projects/Gas-O-Line.png";
import indiefolio from "../../Assets/Projects/indiefolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mgf}
              isBlog={false}
              title="Meta Game Fantasy (M G F) "
              description=" Meta Game Fantasy is the gaming application in founded on a
              solidarity game, special competitons, and formats. Working on backend Node.js, Express is used for the server &
              postgres, postgres create schema and data modeling"
              ghLink=""
              demoLink="https://metagamefantasy.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indiefolio}
              isBlog={false}
              title="Indiefolio"
              description="Indiefolio is the freelancing live webApp which provides world's best artist to work with. Have more than 10k registered users.
              Working on backend Node.js, Express, Razerpay payment gateway.
                created varios api which helps to recommend the artist w.r.t to past project types & client's budget  "
              demoLink="https://indiefolio.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GasOLine}
              isBlog={false}
              title="Gas-O-Line"
              description="Gas-O-Line is the webApp provides monthly subscription gas at
              low prices.Drilling for oil and gas production in Texas,Nevada, New Mexico
              Alaska and Louisiana.  Working on backend Node.js, stripe payment gateway for
              subscription. API for creating user, product and Stripe webhook
              implementation"
              ghLink=""
              demoLink="https://stage.gas-o-line.com/"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
