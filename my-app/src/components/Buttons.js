import React from 'react';
import { Button, Box} from '@material-ui/core';

function Buttons() {

  return (
    <div className="content">
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Button variant="contained" color="primary" size="large">Genre 1</Button>
        <Button variant="contained" color="primary" size="large">Genre 1</Button>
        <Button variant="contained" color="primary" size="large">Genre 1</Button>
        <Button variant="contained" color="primary" size="large">Genre 1</Button>
        <Button variant="contained" color="primary" size="large">Genre 1</Button>
      </Box>

      <Box>
        <Button variant="contained" color="secondary" size="large">Yes</Button>
        <Button variant="contained" color="secondary" size="large">No</Button>
      </Box>
    </div>
  );
}

export default Buttons;