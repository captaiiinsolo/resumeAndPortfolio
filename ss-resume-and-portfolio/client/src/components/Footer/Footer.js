import React from 'react';
import { Drawer, IconButton, Grid, Row, Col, Button } from 'rsuite';
import AngleUpIcon from '@rsuite/icons/legacy/AngleUp';

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const [placement, setPlacement] = React.useState();

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <Grid fluid>
      <Row>
        <Col>
          <div>
            <IconButton
              icon={<AngleUpIcon />}
              onClick={() => handleOpen("bottom")}
            />

            <Drawer
              size="xs"
              placement={placement}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Drawer.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} appearance="primary">
                  Confirm
                </Button>
              </Drawer.Actions>
            </Drawer>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}