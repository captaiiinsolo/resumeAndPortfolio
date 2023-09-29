import React, { useState } from "react";
import {
  Form,
  Schema,
  ButtonToolbar,
  Button,
  Input,
  Grid,
  Col,
  Row,
  Panel,
} from "rsuite";
import { CREATE_CLIENT } from "../../utils/Mutations";
import { useMutation } from "@apollo/client";

const firstNameRule = Schema.Types.StringType().isRequired(
  "This field is required. Please enter your first name."
);

const lastNameRule = Schema.Types.StringType().isRequired(
  "This field is required. Please enter your last name."
);

const emailRule = Schema.Types.StringType()
  .isRequired("This field is required. Please enter your email address.")
  .isEmail("Please enter a valid email address.");

const phoneRule = Schema.Types.StringType()
  .isRequired("This field is required. Please enter your phone number.")
  .addRule((value, data) => {
    return /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(value);
  }, "Please enter a valid phone number.");

export default function ContactMeForm() {

    const [createClient, { error}] = useMutation(CREATE_CLIENT);

    const [FormData, setFormData] = useState({
      firstName: "",
      lastName: "",
    });

    const handleInputChange = async (event) => {
      const { name, value } = event.target;
      setFormData({...FormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefailt();

      try {
        const { data } = await createClient({
        variables: { ...FormData },
      });
    } catch (error) {
      console.log(error);
    }

    };
  

  return (
    <Grid fluid>
      <Row
        style={{ margin: "3rem", display: "flex", justifyContent: "center" }}
      >
        <Col
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={22}
          xs={22}
          style={{ margin: "3rem 1.5rem" }}
        >
          <h3 style={{ textAlign: "center", margin: "1rem 0" }}> Contact Me</h3>
          <Panel
            bordered
            shaded
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Form layout="horizontal" onSubmit={handleFormSubmit}>
              <Form.Group controlId="firstName">
                <Form.Control
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar style={{ justifyContent: "space-between" }}>
                  <Button type="reset" color="red" appearance="subtle">
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    color="green"
                    appearance="primary"
                  >
                    Submit
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
