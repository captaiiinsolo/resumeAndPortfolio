import React from "react";
import { Form, Schema, ButtonToolbar, Button, Input, Grid, Col, Row, Panel } from "rsuite";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const firstNameRule = Schema.Types.StringType().isRequired('This field is required. Please enter your first name.');

const lastNameRule = Schema.Types.StringType().isRequired('This field is required. Please enter your last name.');

const emailRule = Schema.Types.StringType().isRequired('This field is required. Please enter your email address.').isEmail('Please enter a valid email address.');

const phoneRule = Schema.Types.StringType().isRequired('This field is required. Please enter your phone number.').addRule((value, data) => {
  return /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(value);
}, 'Please enter a valid phone number.');


function FirstNameField() {
  return (
    <Form.Group controlId="firstname-1">
              <Form.Control name="firstname-1" placeholder="First Name" rule={firstNameRule} />
            </Form.Group>
  );
}

function LastNameField() {
  return (
    <Form.Group controlId="lastname-1">
      <Form.Control name="lastname-1" placeholder="Last Name" rule={lastNameRule} />
    </Form.Group>
  );
}

function EmailField() {
  return (
    <Form.Group controlId="email-1">
      <Form.Control name="email-1" placeholder="Email" rule={emailRule}/>
    </Form.Group>
  );
}

function PhoneNumberField() {
  return (
    <Form.Group controlId="phone-1">
      <Form.Control name="phone-1" placeholder="Phone Number" rule={phoneRule}/>
      <Form.HelpText tooltip>(###)-###-####</Form.HelpText>
    </Form.Group>
  );
}

function CompanyNameField() {
  return (
    <Form.Group controlId="company-1">
      <Form.Control name="company-1" placeholder="Company Name" />
      <Form.HelpText tooltip>This field is optional.</Form.HelpText>
    </Form.Group>
  );
}

function MessageField() {
  return (
    <Form.Group controlId="message-1">
      <Textarea name="message-1" placeholder="Message" />
    </Form.Group>
  );
}

export default function ContactMeForm() {

  // const [errorVisible, setErrorVisible] = React.useState(false);
  // const [errorPlacement, setErrorPlacement] = React.useState('bottomStart');
  // const errorMessage = errorVisible ? 'This field is required' : null;

  return (
    <Grid fluid>
      <Row style={{ margin: "3rem", display: 'flex', justifyContent: 'center' }}>
        <Col xxl={8} xl={8} lg={8} md={12} sm={22} xs={22} style={{margin: '3rem 1.5rem'}}>
          <h3 style={{ textAlign: 'center', margin: '1rem 0'}}> Contact Me</h3>
        <Panel bordered shaded style={{display: 'flex', justifyContent: 'center'}}>
          <Form layout="vertical">
            <FirstNameField />
            <LastNameField />
            <EmailField />
            <PhoneNumberField />
            <CompanyNameField />
            <MessageField />
            <ButtonToolbar style={{ justifyContent: "space-between" }}>
              <Button type="reset" color="red" appearance="subtle">
                Reset
              </Button>
              <Button type="submit" color="green" appearance="primary">
                Submit
              </Button>
            </ButtonToolbar>
          </Form>
        </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
