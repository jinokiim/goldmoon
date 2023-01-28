// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';
import { SxProps, Theme } from '@mui/system';

import { useEffect, useState } from 'react';

import _ from 'lodash';

// ----------------------------------------------------------------------

const errMsgStyles = {
  mb: 7,
  px: 2,
  textAlign: 'center',
  wordBreak: 'keep-all'
} as SxProps<Theme>;

const IndexPage = function () {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={<></>}
        content={
          <Box
            sx={{
              pt: 7,
              px: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ height: '100%' }}>
              <Typography variant="h3" sx={{ ...errMsgStyles }}>
                메인페이지 입니다.
              </Typography>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
