"use client"

import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';


function OffcanvasExample() {
  const [mobileViewOpen, setMobileViewOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar key="md" expand="md" bg={theme === "dark" ? "light" : "dark"} data-bs-theme={theme === "dark" ? "light" : "dark"} className="m-2 rounded-3xl  mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            bg={theme === "dark" ? "light" : "dark"} data-bs-theme={theme === "dark" ? "light" : "dark"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#action2">Home</Nav.Link>
                <NavDropdown
                  title="Course"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  
                >
                
                  <NavDropdown title="AI & Data Science" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Data Science</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Data Analytics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Tableau</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Artifical Intelligence</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Devops & Cloud" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Google Cloud Platform</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Devops Training</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Azure Solution Architect
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Azure</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Azure DevOps</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">AWS Solution Architect</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">AWS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">AWS Devops</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">AWS SysOps</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Kubernetes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Terraform</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Web Development" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">React Js</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Angular Js</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Node Js</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Python Django</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">UI / UX Designer</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Robotic Process Automation" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">UiPath</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Rpa</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Node Js</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Blue Prism</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Automation Anywhere</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Master Programs" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Data Master Programs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Python Full Stack Master Programs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Java Full Stack Master Programs</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Data Engineering" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Azure Data Engineering</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">AWS Data Engineering</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">PySpark</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Apache Spark</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">SnowFlake</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Big Data Hadoop</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Programming" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Php</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">J2ee</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Java</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Project Management" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Primevera</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Scrum Master</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Other Trainings" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Dot Net</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Android</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">IOT</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">SQl</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">IOS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Linux</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">SalesForce</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Digital Marketing</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Networking" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Ethical Hacking</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Cyber Security</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Software Testing" id="basic-nav-dropdown" drop="end">
                    <NavDropdown.Item href="#action/3.4.1">Selenium</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Selenium with Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">QTP UFT</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Manual Testing</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown
                  title="Language"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
               
                    <NavDropdown.Item href="#action/3.4.1">German</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">French </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">Spanish</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.3">English</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Hindi </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Korean </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4.2">Japanese </NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link href="#action1">Job Support</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <div className='box-border d-flex align-items-center'>
                {theme === "light" ?
                  <span className='flex cursor-pointer text-white'> <CiLight title="Light" size={20} color="white" className="mx-2" onClick={() => setTheme(theme === "light" ? "dark" : "light")} /> Light </span> : <span className=' cursor-pointer flex mx-1'><MdDarkMode size={20} className="mx-2" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />Dark </span>}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
