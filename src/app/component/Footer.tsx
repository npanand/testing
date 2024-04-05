"use client"

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';
import { useTheme } from 'next-themes'
function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    
    <footer className={theme === "dark" ?  "bg-light text-black py-4 foot-container":"bg-dark text-white py-4 foot-container" } >
      <Container fluid className='p-3'>
        <Row>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} className="mb-4 mb-md-0 d-flex justify-content-center ">

            <ul className="list-unstyled mb-0">
              <h1>Title 1</h1>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} className="mb-4 mb-md-0 d-flex justify-content-center">

            <ul className="list-unstyled mb-0">
              <h1>Title 2</h1>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} className="mb-4 mb-md-0 d-flex justify-content-center">

            <ul className="list-unstyled mb-0">
              <h1 className=''>Title 3</h1>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} className="mb-4 mb-md-0 d-flex justify-content-center">

            <ul className="list-unstyled mb-0 ">
              <h1>Title 4</h1>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
              <li> Title</li>
            </ul>
          </Col>
        </Row>
        <div className='footer-line my-3'></div>
        <Row className="mt-3">
          <h1 className='d-flex  p-3 justify-content-center'>Connect With Our Social Media To Get an Instant Updates</h1>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-md-right d-flex justify-content-center">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><FaFacebookF /></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><FaInstagram /></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="youtube"><FaYoutube /></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="google"><FaGoogle /></a></li>
            </ul>
          </Col>
        </Row>
        <div className='footer-line my-3'></div>
        <Row >
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div className='d-flex justify-content-center '>
              <img src="#" alt="logo" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} >
            <div className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus error dolor vel quidem pariatur voluptatibus modi omnis, natus soluta numquam ut at dolorum a! Saepe magni excepturi voluptatem at.
              Nobis nam cumque aliquam provident eius laborum officiis iure, praesentium architecto nihil dolorem autem. Dolorem iusto, at distinctio aliquid voluptatem fugit ipsam dolorum earum nisi labore inventore reprehenderit voluptate quasi.
            </div>
          </Col>
        </Row>
      </Container>
      <div className='footer-line my-2'></div>
      <div className="py-2">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0 py-2">&copy; 2024 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
