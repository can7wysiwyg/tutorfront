'use client'
import React, { useState } from 'react'
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/actions/authAction';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Link from 'next/link';
  



export default function Login() {
    const[formData, setFormdata] = useState({username: "", password: ""})
  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async(e: React.FormEvent) => {
  e.preventDefault()

  await dispatch(loginUser(formData))


}



  return (
    <Container style={{marginTop: "2rem"}}>
            <Row className="justify-content-md-center">

            <Col xs={12} md={6}>
          <h3 className='text-center'>Log In</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>enter your username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    
                
                placeholder="enter your username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>enter your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                
              
              />
            </Form.Group>
          
            <Button variant="danger" type="submit">
              Submit
            </Button> 
          </Form>
          <Row className="py-3">
            <Col>
              New Tutor?
              <Link href="/authentication/register"> Register For An Account</Link>
            </Col>
            <Col className="text-right">
              <Link href="/authentication/forgot">Forgot Password</Link>
            </Col>
          </Row>
        </Col>
      </Row>   
    </Container>
  )
}
