import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function GitHubProjects({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Filter out forked repos and map to project format
        const filteredRepos = data
          .filter(repo => !repo.fork && !repo.private)
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description available",
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || null,
            // You can add custom swagger URLs here based on repo name
            swaggerUrl: getSwaggerUrl(repo.name),
            techStack: repo.language ? [repo.language] : [],
            stars: repo.stargazers_count,
            forks: repo.forks_count
          }));
        
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubRepos();
    }
  }, [username]);

  // Function to determine Swagger URL based on repo name
  const getSwaggerUrl = (repoName) => {
    const swaggerUrls = {
      'ecommerce-api': 'https://ecommerce-api-demo.herokuapp.com/api-docs',
      'task-management-system': 'https://task-manager-api.herokuapp.com/swagger',
      'weather-dashboard-api': 'https://weather-api-service.herokuapp.com/api-docs',
      'auth-service': 'https://auth-service-demo.herokuapp.com/swagger-ui',
      'portfolio-backend': 'https://portfolio-backend-demo.herokuapp.com/api/documentation',
      'chat-api': 'https://chat-api-service.herokuapp.com/docs'
    };
    
    return swaggerUrls[repoName] || null;
  };

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My GitHub <strong className="purple">Repositories</strong>
          </h1>
          <div className="text-center" style={{ color: "white", padding: "50px" }}>
            <Spinner animation="border" variant="primary" />
            <p>Loading repositories...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My GitHub <strong className="purple">Repositories</strong>
          </h1>
          <Alert variant="danger" className="mt-4">
            Error loading repositories: {error}
          </Alert>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My GitHub <strong className="purple">Repositories</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my latest GitHub projects with live demos and API documentation.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {repos.map((repo) => (
            <Col md={4} className="project-card" key={repo.id}>
              <ProjectCard
                imgPath={`https://opengraph.githubassets.com/1/${username}/${repo.title}`}
                isBlog={false}
                title={repo.title}
                description={repo.description}
                ghLink={repo.githubUrl}
                demoLink={repo.liveUrl}
                swaggerUrl={repo.swaggerUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default GitHubProjects;
