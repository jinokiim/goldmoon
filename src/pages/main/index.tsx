// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';
import { SxProps, Theme } from '@mui/system';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { StyledButton } from '@/src/components/common/Styled';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const errMsgStyles = {
  mb: 7,
  px: 2,
  textAlign: 'center',
  wordBreak: 'keep-all'
} as SxProps<Theme>;

const IndexPage = function () {
  const router = useRouter();

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
              <StyledButton sx={{ fontWeight: 600 }} onClick={() => router.push('/main/notice')}>
                공 지 사 항
              </StyledButton>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
