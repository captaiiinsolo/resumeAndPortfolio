import { Grid, Row, Col, Panel } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { FaGithub, FaMedium, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';


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
            <motion.div whileHover={{ scale: 1.15, boxShadow: '0px 10px 5px 0px rgba(0, 0, 0, 0.2)'}} whileTap={{scale: 1}}>
            <a  href={socialIcon.link} target='_blank' rel='noreferrer' style={{color: '#2a3d45', textDecoration: 'none'}}>
            <Panel shaded style={{ display: 'flex', justifyContent: 'center'}}>                
                <Icon color={socialIcon.color} as={socialIcon.icon} style={{ fontSize: '6rem'}} />
                <h6 style={{ textAlign: 'center'}}>{socialIcon.title}</h6>
            </Panel>
            </a>
            </motion.div>
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