import { Grid, Row, Col, Panel } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { FaGithub, FaMedium, FaTwitter, FaLinkedin } from "react-icons/fa6";


const socialIcons  = [
    {
        id: '01',
        title: 'GitHub',
        icon: FaGithub,
        color: '#2a3d45',
        link: 'https://github.com/captaiiinsolo'
    },

    {
        id: '02',
        title: 'LinkedIn',
        icon: FaLinkedin,
        color: '#2a3d45',
        link: 'https://www.linkedin.com/in/solomon-santos'
    },

    {
        id: '03',
        title: 'Medium',
        icon: FaMedium,
        color: '#2a3d45',
        link: 'https://medium.com/@solo.d.santos'
    
    },

    {
        id: '04',
        title: 'Twitter',
        icon: FaTwitter,
        color: '#2a3d45',
        link: 'https://twitter.com/captaiiinsolo'
    },
];

export default function Socials() {
    const socialsList = socialIcons.map((socialIcon) => (
        <Col lg={12} style={{ padding: '1rem'}}>
            <Panel shaded style={{ display: 'flex', justifyContent: 'center'}}>                
                <a  href={socialIcon.link} target='_blank' rel='noreferrer'><Icon color={socialIcon.color} as={socialIcon.icon} style={{ fontSize: '6rem'}} /></a>
                <h6 style={{ textAlign: 'center'}}>{socialIcon.title}</h6>
            </Panel>
        </Col>
    ));

    return (
        <Grid fluid>
            <Row >
                {socialsList}
            </Row>
        </Grid>
    );
}