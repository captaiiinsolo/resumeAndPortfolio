import React, { useState, useEffect } from 'react';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

const Age = () => {
  const [age, setAge] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const tock = () => {
    const birthTime = new Date('1993-07-13T18:30:00');
    const currentTime = new Date();

    const ageInSeconds = Math.floor((currentTime - birthTime) / 1000);

    setAge({
      years: Math.floor(ageInSeconds / (365.2421897 * 24 * 3600)),
      days: Math.floor((ageInSeconds % (365.2421897 * 24 * 3600)) / (24 * 3600)),
      hours: Math.floor((ageInSeconds % (24 * 3600)) / 3600),
      minutes: Math.floor((ageInSeconds % 3600) / 60),
      seconds: ageInSeconds % 60,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tock(), 1000); // Update every 1 second
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
        {age.years} Yrs {age.days} Days {age.hours} Hrs {age.minutes} Mins {age.seconds} Secs
    </>
  );
};

const personalData = [
  {
    key: 'Age',
    label: 'Age',
    value: <Age />,
  },
  {
    key: 'Ethnicity',
    label: 'Ethnicity',
    value: 'Pacific Islander',
  },
  {
    key: 'Race',
    label: 'Race',
    value: 'Chamorro',
  },
  {
    key: 'Gender',
    label: 'Gender',
    value: 'Male',
  },
  {
    key: 'City',
    label: 'Current City',
    value: 'San Diego',
  },
  {
    key: 'State',
    label: 'Current State',
    value: 'CA',
  },
  {
    key: 'States',
    label: 'States Visited',
    value: '17',
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1am3HkvEd0-G8Ti3i-mG3Ry7CHvS2K2k&ll=37.38490069790931%2C-92.34857596732442&z=5',
  },
  {
    key: 'Countries',
    label: 'Countries Visited',
    value: '2',
  },
];

export default function PersonalStats() {
  return (
    <Table cellBordered autoHeight data={personalData}>
      <Column flexGrow={1} fullText>
        <HeaderCell>Stats</HeaderCell>
        <Cell dataKey="label" />
      </Column>
      <Column flexGrow={1} fullText align="right">
        <HeaderCell>Value</HeaderCell>
        <Cell dataKey="value" />
      </Column>
    </Table>
  );
}
