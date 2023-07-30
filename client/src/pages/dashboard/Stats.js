import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEffect, useState } from 'react';
// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function Stats() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then(response => response.json())
    .then(json => {
      console.log(json.HistoricalData[0])
      setData(json.HistoricalData)
    })
    console.log(data)
  },[])
  return (
    <React.Fragment>
      <Title></Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>CO2</TableCell>
            <TableCell>TVOC</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.co2}ppm</TableCell>
              <TableCell>{row.TVOC}ppb</TableCell>
              <TableCell>{row.temperature} C</TableCell>
              <TableCell>{row.humidity}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}