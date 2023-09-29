import React from "react";
import {
  Grid,
  Row,
  Col,
  Panel,
  Steps,
  Button,
  ButtonGroup,
} from "rsuite";
import {
  FcCallback,
  FcMindMap,
  FcMultipleDevices,
  FcFinePrint,
  FcShipped,
} from "react-icons/fc";

export default function DesignProcess() {
  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 4 ? 4 : nextStep);
  };

  const stepTitles = [
    "Consultation",
    "Design",
    "Development",
    "Testing",
    "Delivery",
  ];

  const stepDescriptions = [
    `A phone or video call scheduled at your convenience.`,
    `Wireframing > Theme Colors > Key Features > Hierarchy and Naming Conventions`,
    `I code your project based on the detailed design.`,
    `I meticulously test every feature of the project.`,
    `I deliver the code to you.`,
  ];

  const onNext = () => onChange(step + 1);
  const onPrev = () => onChange(step - 1);

  return (
    <Grid fluid>
      <Row style={{ margin: "3rem" }}>
        <Col lg={22} style={{ margin: "1rem 1.5rem" }}>
          <Panel>
            <h4 style={{ margin: "2rem 0" }}>The Process</h4>
            <Steps current={step}>
              <Steps.Item
                title="Consultation"
                icon={<FcCallback style={{ fontSize: "1.5rem" }} />}
              />
              <Steps.Item
                title="Design"
                icon={<FcMindMap style={{ fontSize: "1.5rem" }} />}
              />
              <Steps.Item
                title="Development"
                icon={<FcMultipleDevices style={{ fontSize: "1.5rem" }} />}
              />
              <Steps.Item
                title="Testing"
                icon={<FcFinePrint style={{ fontSize: "1.5rem" }} />}
              />
              <Steps.Item
                title="Delivery"
                icon={<FcShipped style={{ fontSize: "1.5rem" }} />}
              />
            </Steps>
          </Panel>
          <hr />
          <Panel>
            {/* Step Descriptions Should Render Here When Active */}
            <h5 style={{ margin: '1rem 0'}}>{stepTitles[step]}</h5>
            <p>{stepDescriptions[step]}</p>
          </Panel>
          <hr />
          <Panel>
            <ButtonGroup style={{ margin: '0 46%', display: 'inline-flex'}}>
              <Button appearance='subtle' onClick={onPrev} disabled={step === 0}>
                Previous
              </Button>
              <Button appearance='subtle' onClick={onNext} disabled={step === 4}>
                Next
              </Button>
            </ButtonGroup>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
