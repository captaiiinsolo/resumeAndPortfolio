import { Panel, Placeholder, Row, Col} from 'rsuite';

function ProjectCards(props) {
    const ProjectCard = props => (
        <Panel {...props} bordered shaded header={props.name}>
            <Placeholder.Paragraph />
        </Panel>
    );

    return (
        <Row>
            <Col md={6} sm={12}>
                <ProjectCard />
            </Col>
            <Col md={6} sm={12}>
                <ProjectCard />
            </Col>
            <Col md={6} sm={12}>
                <ProjectCard />
            </Col>
            <Col md={6} sm={12}>
                <ProjectCard />
            </Col>
        </Row>
    )
}

export default ProjectCards;