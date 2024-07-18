import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hacker_rank_sql from '../../Assets/hacker_rank_sql.png'
import hacker_rank_problem_solving from '../../Assets/hacker_rank_problem_solving.png'
import hacker_rank_java from '../../Assets/hacker_rank_java.png'
import hacker_rank_node from '../../Assets/hacker_rank_node.png'
import jpmorgan_chase from '../../Assets/jpmorgan_chase.png'


function Certification() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Certification </strong>
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hacker_rank_sql}
                            isBlog={false}
                            title=" 🔰 SQL (Basic) "
                            description="Learn All Basic Concept of SQL Such as Joins, Grouping, Aggregation."

                            demoLink="https://www.hackerrank.com/certificates/iframe/48406461a534"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hacker_rank_problem_solving}
                            isBlog={false}
                            title=" 🔰 Problem Solving "
                            description=" Learn and solve DSA concept such as Stack, Queue, Tree, LinkedList etc ."

                            demoLink="https://www.hackerrank.com/certificates/6a2b00a16551"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hacker_rank_java}
                            isBlog={false}
                            title="🔰 Java (Basic)"
                            description=" Learn OOPS concept such as Abstraction, Encapulation, Inheritence, Polymorphism  ."

                            demoLink="https://www.hackerrank.com/certificates/62a554f289de"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hacker_rank_node}
                            isBlog={false}
                            title="🔰 Node (Basic)"
                            description=" Learn Creating API, Implementing Middleware, Handeling errors, Websocket and Best Practices."
                            demoLink="https://www.hackerrank.com/certificates/b958d82ffa52"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jpmorgan_chase}
                            isBlog={false}
                            title="🔰 Software Engineering Virtual Experience"
                            description=" Interface with a stock price data feed, Use JPMorgan Chase frameworks and tools, Display data visually for traders."

                            demoLink="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_bnpf3yL7seYMK3kyB_1631285792899_completion_certificate.pdf"
                        />
                    </Col>



                </Row>
            </Container>
        </Container>
    );
}

export default Certification;
