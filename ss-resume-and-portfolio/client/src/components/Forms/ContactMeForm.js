import React, { useState } from "react";
import {
  ButtonToolbar,
  Button,
  Grid,
  Col,
  Row,
  Panel,
  Form,
} from "rsuite";
import { CREATE_CLIENT } from "../../utils/Mutations";
import { useMutation } from "@apollo/client";

export default function ContactMeForm() {

  const [formState, setFormState] = useState({ firstName: "", lastName: "" });
  const [createClient] = useMutation(CREATE_CLIENT);

  const handleFormSubmit = async (event) => {
    await createClient({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    })
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
                <Form.Control placeholder="First Name" name="firstName" />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control placeholder="Last Name" name="lastName" />
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
