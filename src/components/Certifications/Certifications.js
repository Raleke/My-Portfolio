import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import certificateImage from "../../Assets/certificate.jpg";
import gmcpnCertificate from "../../Assets/gmcpn.JPG";
import horizonCertificate from "../../Assets/horizon.JPG";
import accountingCertificate from "../../Assets/accounting-certificate.jpg";
import codexMasterclassCertificate from "../../Assets/codex-masterclass-certificate.png";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function Certifications() {
  const [width, setWidth] = useState(1200);
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  const certifications = [
    {
      title: "Certificate of Completion",
      issuer: "New Horizons",
      date: "2025",
      description: "Installing and configuring windows 10 client, Fundamentals of computer security, Oracle Database 12c Admin Workshop, Android Application Management",
      credentialId: "NH-2025-001",
      image: horizonCertificate,
      details: "This comprehensive certification covers advanced Windows 10 administration, security fundamentals, Oracle database management, and Android application deployment strategies."
    },
    {
      title: "GMCPN Certified Developer",
      issuer: "Computer Professionals Registration Council of Nigeria",
      date: "July 28, 2025",
      description: "Certification for authorization to practice the computer professional within the federal republic of Nigeria",
      credentialId: "GMCPN-2025-CD-001",
      image: gmcpnCertificate,
      details: "Official certification authorizing practice as a computer professional in Nigeria, covering software development standards, ethical practices, and professional competencies."
    },
    {
      title: "Certificate of Proficiency in Software Development",
      issuer: "The Code Center",
      date: "28/06/2024",
      description: "Certificate of proficiency in HTML5, CSS3, PHP, MySQL, JavaScript, Node.js, Express.js, API Development, and MongoDB",
      credentialId: "TCC-2024-SD-001",
      image: certificateImage,
      details: "Full-stack development certification covering modern web technologies including frontend frameworks, backend development, database management, and API design principles."
    },
    {
      title: "OpenAI Codex Masterclass 2026: Build AI Agents 10x Faster",
      issuer: "Udemy",
      date: "June 8, 2026",
      description: "Instructor: Shan Singh | 300,000+ Students | Best-Selling Instructor. Length: 4.5 total hours",
      credentialId: "UC-184019e6-f25e-4652-9efa-d8c7b53c4533",
      image: codexMasterclassCertificate,
      details: "Hands-on training in using OpenAI Codex to build and ship AI agents faster, covering agentic workflows and practical automation techniques."
    },
    {
      title: "Accounting: From Beginner to Advanced!",
      issuer: "Udemy",
      date: "June 22, 2026",
      description: "Instructor: Stefan Ignatovski, Ph.D. Length: 11 total hours",
      credentialId: "UC-96a514e2-59ad-4d97-b295-87bfcc1cf4ed",
      image: accountingCertificate,
      details: "Comprehensive accounting fundamentals through advanced topics, covering double-entry bookkeeping, financial statements, and core accounting principles."
    }
  ];

  const handleViewCredential = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="resume">
          <Col md={12} className="d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "800px", margin: "20px 0" }}>
              <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
                My <strong className="purple">Certifications</strong>
              </h1>
              
              <Row>
                {certifications.map((cert, index) => (
                  <Col md={6} key={index} style={{ marginBottom: "20px" }}>
                    <Card className="project-card-view">
                      {cert.image && (
                        <Card.Img 
                          variant="top" 
                          src={cert.image} 
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={cert.title}
                        />
                      )}
                      <Card.Body>
                        <Card.Title style={{ color: "#9b7fd4", fontSize: "1.2em" }}>
                          {cert.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {cert.issuer}
                        </Card.Subtitle>
                        <Card.Text style={{ textAlign: "left", fontSize: "0.9em" }}>
                          <strong>Date:</strong> {cert.date}<br />
                          <strong>Credential ID:</strong> {cert.credentialId}<br />
                          {cert.description}
                        </Card.Text>
                        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            onClick={() => handleViewCredential(cert)}
                          >
                            View Credential
                          </Button>
                          {cert.image && (
                            <Button 
                              variant="success" 
                              size="sm"
                              href={cert.image}
                              download={`${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                            >
                              <AiOutlineDownload />
                              &nbsp;Download Certificate
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "40px" }}>
          <Col md={12} className="text-center">
            <h3 className="project-heading" style={{ marginBottom: "20px" }}>
              Download All <strong className="purple">Certifications</strong>
            </h3>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              {certifications.map((cert, index) => (
                cert.image && (
                  <Button
                    key={index}
                    variant="primary"
                    href={cert.image}
                    download={`${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                    style={{ maxWidth: "300px", marginBottom: "10px" }}
                  >
                    <AiOutlineDownload />
                    &nbsp;{cert.issuer} Certificate
                  </Button>
                )
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for viewing individual certification */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#9b7fd4" }}>
            {selectedCert?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCert && (
            <div>
              <Row>
                <Col md={6}>
                  {selectedCert.image ? (
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title}
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                      }}
                    />
                  ) : (
                    <div style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6c757d",
                      fontSize: "1.2em",
                      fontWeight: "bold"
                    }}>
                      No Image Available
                    </div>
                  )}
                </Col>
                <Col md={6}>
                  <h5 style={{ color: "#6c757d", marginBottom: "15px" }}>
                    {selectedCert.issuer}
                  </h5>
                  <p><strong>Date Issued:</strong> {selectedCert.date}</p>
                  <p><strong>Credential ID:</strong> {selectedCert.credentialId}</p>
                  <p><strong>Description:</strong> {selectedCert.description}</p>
                  <p><strong>Details:</strong> {selectedCert.details}</p>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {selectedCert?.image && (
            <Button 
              variant="primary" 
              href={selectedCert.image}
              download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.jpg`}
            >
              <AiOutlineDownload />
              &nbsp;Download Certificate
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Certifications;
