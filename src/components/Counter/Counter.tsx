import { Button, Container } from '@material-ui/core';
import React, { useState } from 'react';

type Props = {
  initialClick?: number;
};

const Counter: React.FC<Props> = ({ initialClick = 0 }) => {
  const [click, setClick] = useState(initialClick);

  return (
    <Container maxWidth="sm">
      Click: {click}
      <br />
      <Button variant="contained" color="primary" onClick={() => setClick(click + 1)}>
        Click Me!
      </Button>
    </Container>
  );
};

export default Counter;
