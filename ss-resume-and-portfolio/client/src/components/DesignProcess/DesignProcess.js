import React from "react";
import {
  Grid,
  Row,
  Col,
  Panel,
  Steps,
  Placeholder,
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
    "I am delighted to offer you the opportunity to schedule a consultation with me to explore your upcoming web project. At your convenience, we can hold this meeting either via video conference or a traditional phone call, tailored to your preference. This consultation serves as an invaluable first step in our collaboration. It allows us to delve into the intricacies of your project, discuss your vision, and ascertain if our expertise aligns with your goals. During our conversation, we will explore the scope of your project, your expectations, and any specific requirements you may have.",

    `Wireframing the Site: To kickstart the design process, we begin with wireframing. This foundational step allows us to outline the structure of your website, defining key elements and their placement. It serves as the blueprint for your site's layout, ensuring an intuitive user experience.
    Discussing Theme Colors: We understand the significance of color in conveying your brand identity and message. During this phase, we engage in a collaborative discussion to select the perfect theme colors that resonate with your brand and appeal to your target audience. Our goal is to create a visually appealing and cohesive design.`,
    "",
    "",
    "",
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
            <ButtonGroup>
              <Button appearance='ghost' onClick={onPrev} disabled={step === 0}>
                Previous
              </Button>
              <Button appearance='ghost' onClick={onNext} disabled={step === 4}>
                Next
              </Button>
            </ButtonGroup>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
}
