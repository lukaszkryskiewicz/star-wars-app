import { useForm } from 'react-hook-form'
import { Form, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactForm = () => {
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [messageSent, setMessageSent] = useState(false)

  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    telephone: '',
    message: ''
  })

  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    setMessageSent(true);
  }

  return (
    <>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control {...register('firstName', { required: true, minLength: 3 })}
            value={contactDetails.firstName}
            name="firstName"
            onChange={(e) => handleChange(e)}
            type="text" placeholder="Enter your First name"
          />
          {errors.firstName && <span> This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control {...register('lastName', { required: true, minLength: 3 })}
            value={contactDetails.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
            type="text" placeholder="Enter your Last name"
          />
          {errors.lastName && <span> This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register('email', { required: true, minLength: 8 })}
            value={contactDetails.email}
            name="email"
            onChange={(e) => handleChange(e)}
            type="email" placeholder="Enter your mail"
          />
          {errors.email && <span> This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control {...register('zipCode', { required: true, minLength: 8 })}
            value={contactDetails.zipCode}
            name="zipCode"
            onChange={(e) => handleChange(e)}
            type="text" placeholder="Enter your zip code"
          />
          {errors.zipCode && <span> This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telephone</Form.Label>
          <Form.Control {...register('telephone', { required: true, minLength: 8 })}
            value={contactDetails.telephone}
            name="telephone"
            onChange={(e) => handleChange(e)}
            type="number" placeholder="Enter your phone number"
          />
          {errors.telephone && <span> This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control {...register('message', { required: true, minLength: 8 })}
            value={contactDetails.message}
            name="message"
            onChange={(e) => handleChange(e)}
            type="text" as="textarea" placeholder="Enter your message"
          />
          {errors.message && <span> This field is required</span>}
        </Form.Group>
        <Button className="m-3" variant="primary" type="submit" >
          Sent message
        </Button>
      </Form>
      <Modal show={messageSent} onHide={() => setMessageSent(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been sent!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMessageSent(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ContactForm;
