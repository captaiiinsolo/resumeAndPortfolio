import React, { useState } from "react";
import { ButtonToolbar, Button, Grid, Col, Row, Panel, Form } from "rsuite";
import { CREATE_CLIENT } from "../../utils/Mutations";
import { useMutation } from "@apollo/client";

export default function ContactMeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [createClient, { error }] = useMutation(CREATE_CLIENT);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    try {
      const { data } = await createClient({
        variables: formData,
      });

      // Handle the response data if necessary
      console.log("Client created:", data);
    } catch (error) {
      console.error("Error creating client:", error);
    }

    // Clear form inputs after submission
    setFormData({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <Grid fluid>
      <Row style={{ margin: "3rem", display: "flex", justifyContent: "center" }}>
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
          <Panel bordered shaded style={{ display: "flex", justifyContent: "center" }}>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="firstName">
                <Form.Control
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(value) => handleInputChange("firstName", value)}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(value) => handleInputChange("lastName", value)}
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar style={{ justifyContent: "space-between" }}>
                  <Button type="reset" color="red" appearance="subtle">
                    Reset
                  </Button>
                  <Button type="submit" color="green" appearance="primary">
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
