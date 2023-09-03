import { Link } from "react-router-dom";
import { Button, Panel, Tooltip, Whisper } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import { FaGithub } from "react-icons/fa6";

const ExitToSite = ({ size }) => (
  <ExitIcon style={{ fontSize: size, color: "blue", marginLeft: "5px" }} />
);

function ProjectCards(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
        padding: "2rem",
      }}
    >
      <Panel bordered bodyFill shaded style={{ width: 265 }}>
        <img
          src={props.image}
          alt={props.title}
          style={{
            height: "240px",
            width: "100%",
          }}
        />
        <Panel collapsible header={props.name}>
          <p>
            <small>{props.description}</small>
          </p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Whisper
              followCursor
              placement="bottom"
              controlId="control-id-hover"
              trigger="hover"
              speaker={<Tooltip>Visit {props.name} Repo</Tooltip>}
            >
              <Button color="blue" appearance="link">
                <Link target="_blank" to={props.git}>
                  <FaGithub style={{ fontSize: "1rem" }} />
                </Link>
              </Button>
            </Whisper>
            <Button color="blue" appearance="link">
              <Link target="_blank" to={props.link}>
                Visit {props.name} <ExitToSite size="1rem" />
              </Link>
            </Button>
          </div>
        </Panel>
      </Panel>
    </div>
  );
}

export default ProjectCards;
