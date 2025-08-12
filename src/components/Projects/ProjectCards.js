import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiSwagger } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          {props.title}
          {props.title === "AI Semantic API" && (
            <span style={{ 
              color: "#ff6b6b", 
              fontSize: "0.7em", 
              marginLeft: "8px",
              backgroundColor: "rgba(255, 107, 107, 0.1)",
              padding: "2px 6px",
              borderRadius: "4px",
              border: "1px solid #ff6b6b"
            }}>
              Not Completed
            </span>
          )}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}

          {!props.isBlog && props.swaggerUrl && (
            <Button
              variant="warning"
              href={props.swaggerUrl}
              target="_blank"
            >
              <SiSwagger /> &nbsp;
              {"API Docs"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
