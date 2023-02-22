// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Divider, Stack, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { useRouter } from 'next/router';
import AppHeader from '@/src/components/Header';
import { COLORS } from '@/src/theme/palette';
import { financialHistory } from '@/src/data/financialData';
import { authState } from '@/src/recoil/atom';
import { useRecoilState } from 'recoil';
import MoveToInit from '@/src/pages/MoveToInit';
import Lottie from 'react-lottie';
import { defaultLoadingOptions } from '@/src/pages';

// ----------------------------------------------------------------------

const IndexPage = function () {
  const router = useRouter();

  const [authCheck] = useRecoilState(authState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && authCheck === true ? (
    <Layout
      header={
        <>
          <AppHeader onPrev={() => router.push('/main')} onPrevText={'회비내역 히스토리'} />
        </>
      }
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
            <Box sx={{ px: 0.5 }}>
              {financialHistory?.map((item, index) => (
                <>
                  <Box key={index}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 400,
                          maxWidth: 200,
                          overflow: 'hidden',
                          whiteSpace: 'nowrap'
                        }}
                        textOverflow="ellipsis"
                      >
                        {item.detail}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: item.condition === 'income' ? 600 : 400,
                          color: item.condition === 'income' ? COLORS.secondary700 : COLORS.text900
                        }}
                      >
                        {item.condition === 'spending' && '-'}
                        {Number(item.amount).toLocaleString()} 원
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: COLORS.text600, mt: '2px', mb: 1.5 }}>
                      {item.year}년 {item.month}월 {item.date}일
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      }
    />
  ) : mounted === false && authCheck === true ? (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Lottie options={defaultLoadingOptions} height={200} width={200} />
      </Box>
    </>
  ) : (
    <>
      <MoveToInit />
    </>
  );
};

export default IndexPage;
