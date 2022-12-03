import { NextPage } from 'next';
import Button from '@mui/material/Button';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();

  return (
    <LayoutMain
      hasNav
      styles={{
        header: {
          height: 56,
          justifyContent: 'center'
        }
      }}
      header={<h1>header check</h1>}
      content={
        <Box sx={{ px: 2.5, pb: 3, pt: headerHeight === 0 ? 7 : 2.5 }}>
          <h1>하이s</h1>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">이동버튼</Button>
        </Box>
      }
    />
  );
};

export default IndexPage;
