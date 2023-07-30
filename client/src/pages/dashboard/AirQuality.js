import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function AirQuality() {
  return (
    <React.Fragment>
      <Title>Air Quality</Title>
      <Typography component="p" variant="h4">
        88%
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View History
        </Link>
      </div>
    </React.Fragment>
  );
}