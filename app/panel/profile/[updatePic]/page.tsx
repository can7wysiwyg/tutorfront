'use client'
import { updatePicture } from '@/redux/actions/userAction';
import { AppDispatch } from '@/redux/store';
import { useParams } from 'next/navigation'
import React, {useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function UpdatePic() {
    const params = useParams<{ updatePic: string;  }>()
    const dispatch = useDispatch<AppDispatch>()
    const [userImage, setUserImage] = useState<null | false | File>(false);


    const handleUserImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {

      const files = event.target.files;
    if (files && files[0]) {
      setUserImage(files[0]);
    }
    

      
    };

    const handleSubmit = async(event: React.FormEvent) => {

      event.preventDefault()

      let formData = new FormData()

      if (userImage) {
        formData = new FormData();
        formData.append('userImage', userImage);
  
        

        await dispatch(updatePicture(params.updatePic, formData))
      }
  



    }



console.log(params.updatePic)
    


  return (
    <div>
      <Container style={{  marginTop: "2rem" }}>
      
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="formBasicBookImage">
                <Form.Label>   update profile picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleUserImageUpload}
                  required
                  accept=".png, .jpg, .jpeg, .webp"
                />
              </Form.Group>

              <Button type="submit">submit</Button>


              </Form>
              </Col>
              </Row>






      </Container>



    </div>
  )
}
