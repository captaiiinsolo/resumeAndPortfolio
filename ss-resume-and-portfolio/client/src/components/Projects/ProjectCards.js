import { Panel } from "rsuite";

function ProjectCards(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Panel
        bordered
        bodyFill
        shaded
        style={{ display: "inline-block", width: 240, marginBottom: "10px" }}
      >
        <img
          src={props.image}
          alt={props.title}
          style={{
            height: "240px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
        <Panel header={props.name}>
          <p>
            <small>{props.description}</small>
          </p>
        </Panel>
      </Panel>
    </div>
  );
}

export default ProjectCards;
