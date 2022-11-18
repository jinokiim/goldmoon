import { NextPage } from 'next';
import Button from '@mui/material/Button';

const IndexPage: NextPage = function () {
  return (
    <>
      <h1>하이 골드문</h1>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

export default IndexPage;
