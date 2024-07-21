'use client'
import React, { useState } from 'react'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { Container , Form, Row, Col, Button  } from 'react-bootstrap'
import { makePost } from '@/redux/actions/postAction'


interface FormData {
    subjectName: string;
    subjectPrice: string;
    subjectCommentary: string;
  }
  

export default function Post() {
    const[formData, setFormdata] = useState<FormData>({subjectName: "",
        subjectPrice: "",
        subjectCommentary: "",})
    const dispatch = useDispatch<AppDispatch>()
    


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      const handleSubmit = async(e: React.FormEvent) => {

        await dispatch(makePost(formData))



      }
    



  return (
    <Container style={{marginTop: "2rem"}}>
        <Row className="justify-content-md-center">

<Col xs={12} md={6}>
<h3 className="text-center" style={{textDecoration: "underline", marginBottom: "2rem"}}>post tutoring service</h3>
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicSubjectName">
                <Form.Control
                  type="text"
                  name="subjectName"
                  value={formData.subjectName}
                  onChange={handleInputChange}
                  placeholder="write the name of the subject"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubjectPrice">
                <Form.Control
                  type="text"
                  name="subjectPrice"
                  value={formData.subjectPrice}
                  onChange={handleInputChange}
                  placeholder="write how much you are charging"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLinkedInLink">



              
<Form.Control

  as="textarea"
  rows={3}
  name="subjectCommentary"
  value={formData.subjectCommentary}
  onChange={handleInputChange}
  placeholder="sell yourself by writing a short description"
/>
</Form.Group>

<Button variant="warning" type="submit">
make post
</Button>






  </Form>


</Col>
</Row>





    </Container>
  )
}
