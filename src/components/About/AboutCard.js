import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nischay Rawat </span>
            from <span className="purple"> New Delhi, India.</span> Always keen to learn <span className="purple">Scalable Architectural Design</span> <br />
            <br /> <span className="purple">Bachelors of Computer Application, Aug 2021 </span>
            <br /> “Chaudhary Charan Singh University”, Meerut Uttar-Pradesh.
            <br />
            <br />
            <br /> <span className="purple">12th, May 2018  </span>
            <br />    N.P Co-ed Sr sec School, New Delhi Delhi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
