import React from "react";
import { Form, ButtonToolbar, Button, Input, FlexboxGrid, Panel } from "rsuite";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

export default function ContactMeForm() {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={8}>
        <Panel bordered shaded>
          <Form layout="fluid">
            <Form.Group controlId="firstname-1">
              <Form.Control name="firstname-1" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="lastname-1">
              <Form.Control name="lastname-1" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="email-1">
              <Form.Control name="email-1" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="phone-1">
              <Form.Control name="phone-1" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group controlId="company-1">
              <Form.Control name="company-1" placeholder="Company Name" />
            </Form.Group>
            <Form.Group controlId="message-1">
              <Textarea name="message-1" placeholder="Message" />
            </Form.Group>

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
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
